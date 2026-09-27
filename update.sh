#!/usr/bin/env bash
# checks dev.mcst.ru for a newer public lcc cross compiler or a newer qemu-e2k-static
# and when there is one builds the zip tests it and leaves everything for the release in $OUT
#
# FORCE=true rebuilds even when nothing changed
# exit 0 means nothing new or a new zip that passed every check, anything else means stop
set -euo pipefail

# dev.mcst.ru uses a certificate mcst signed itself so no ca can vouch for it
# instead of trusting any ca we pin its public key, the certificate is valid until 2027-07-22
# when mcst replaces it this fails and the new key has to be checked from two places before updating the pin
PIN="sha256//82eTjsfVVOLRiKzCYgVSOMOCfRr7qoRQ6YWZM/gTioo="
BASE="https://dev.mcst.ru"
TARGET="e2k-v6.2c3.linux-6.1_64"
ZIP="elbrus_cross_compiler_toolchain.zip"

REPO="$(cd "$(dirname "$0")" && pwd)"
WORK="${WORK:-${RUNNER_TEMP:-/tmp}/e2k-update}"
OUT="$WORK/out"
FORCE="${FORCE:-false}"

log() { printf '[%s] %s\n' "$(date -u '+%F %T')" "$*"; }
fetch() { curl -sSfL -k --pinnedpubkey "$PIN" --retry 3 --retry-delay 10 --max-time 1800 "$@"; }
# mcst puts just the bare hash in .sha512 files, sometimes with a file name after it
sha512_of() { fetch "$1.sha512" | grep -oiE '\b[0-9a-f]{128}\b' | head -1 | tr 'A-F' 'a-f'; }
output() { [ -n "${GITHUB_OUTPUT:-}" ] && echo "$1=$2" >> "$GITHUB_OUTPUT" || true; }

rm -rf "$WORK" && mkdir -p "$WORK" "$OUT"

log "reading $BASE/download/"
links=$(fetch "$BASE/download/" \
  | grep -oE 'href="[^"]+"' | sed -E 's/^href="//; s/"$//' \
  | sed -E "s#^/#$BASE/#" | grep -E "^$BASE/downloads/" | grep -v 'downloads/.*https:' | sort -u)

target_re=${TARGET//./\\.}
lcc_url=$(grep -E "/cross-sp-public-osl-[0-9]+\.[0-9]+\.[0-9]+\.$target_re\.tgz$" <<<"$links" \
  | sed -E 's#^(.*/cross-sp-public-osl-([0-9.]+)\.e2k.*)$#\2 \1#' | sort -V -k1,1 | tail -1 | cut -d' ' -f2)
qemu_url=$(grep -E '/downloads/[0-9]{4}-[0-9]{2}-[0-9]{2}/qemu-e2k-static$' <<<"$links" | sort | tail -1)
[ -n "$lcc_url" ] || { log "no cross-sp-public-osl for $TARGET on the page"; exit 1; }
[ -n "$qemu_url" ] || { log "no qemu-e2k-static on the page"; exit 1; }

lcc_version=$(sed -E 's#.*/cross-sp-public-osl-([0-9.]+)\.e2k.*#\1#' <<<"$lcc_url")
qemu_date=$(sed -E 's#.*/downloads/([0-9-]+)/qemu-e2k-static$#\1#' <<<"$qemu_url")
lcc_sha=$(sha512_of "$lcc_url")
qemu_sha=$(sha512_of "$qemu_url")
[ -n "$lcc_sha" ] && [ -n "$qemu_sha" ] || { log "no sha512 next to the files"; exit 1; }
log "newest lcc $lcc_version and qemu-e2k-static from $qemu_date"

new_meta=$(jq -n --arg lv "$lcc_version" --arg lu "$lcc_url" --arg ls "$lcc_sha" \
  --arg qd "$qemu_date" --arg qu "$qemu_url" --arg qs "$qemu_sha" --arg t "$TARGET" \
  '{lcc: {version: $lv, target: $t, url: $lu, sha512: $ls}, qemu: {date: $qd, url: $qu, sha512: $qs}}')
# the hashes decide, mcst sometimes moves the same file to a new dated folder
shas() { jq -r '.lcc.sha512 + " " + .qemu.sha512'; }
if [ "$FORCE" != true ] && [ -f "$REPO/metadata.json" ] \
  && [ "$(shas < "$REPO/metadata.json")" = "$(shas <<<"$new_meta")" ]; then
  log "no updates, the toolchain is current"
  output changed false
  exit 0
fi
log "update found, current is $(jq -c '{lcc: .lcc.version, qemu: .qemu.date}' "$REPO/metadata.json" 2>/dev/null || echo none)"

# download and check against the published hashes
src="$WORK/src"; mkdir -p "$src"
lcc_file=$(basename "$lcc_url")
fetch -o "$src/$lcc_file" "$lcc_url"
fetch -o "$src/qemu-e2k-static" "$qemu_url"
echo "$lcc_sha  $src/$lcc_file" | sha512sum -c --quiet
echo "$qemu_sha  $src/qemu-e2k-static" | sha512sum -c --quiet
log "sha512 checked"

# lay it out the way the previous zips were so nothing that uses them has to change
x="$WORK/x"; mkdir -p "$x"
tar xzf "$src/$lcc_file" -C "$x"
lcc_dir=$(find "$x/opt/mcst" -mindepth 1 -maxdepth 1 -type d -name 'lcc-*' | head -1)
[ -n "$lcc_dir" ] || { log "no opt/mcst/lcc-* inside $lcc_file"; exit 1; }
ver_dir=$(basename "$lcc_dir")

tree="$WORK/tree/elbrus-toolchain"; mkdir -p "$tree/emulator" "$tree/sources"
mv "$lcc_dir" "$tree/lcc-cross"
[ -d "$tree/lcc-cross/fs" ] && cp -a "$tree/lcc-cross/fs" "$tree/sysroot"
install -m 755 "$src/qemu-e2k-static" "$tree/emulator/qemu-e2k"
cp "$src/$lcc_file" "$src/qemu-e2k-static" "$tree/sources/"
echo "$lcc_sha" > "$tree/sources/$lcc_file.sha512"
echo "$qemu_sha" > "$tree/sources/qemu-e2k-static.sha512"
(cd "$tree" && sha512sum "sources/$lcc_file" sources/qemu-e2k-static > SHA512SUMS)
jq . <<<"$new_meta" > "$tree/metadata.json"
sed "s/^VER=.*/VER=$ver_dir/" "$REPO/setup.sh" > "$tree/setup.sh"
chmod 755 "$tree/setup.sh"
cat > "$tree/README.md" <<EOF
# e2k toolchain

mcst lcc $lcc_version for $TARGET on an x86_64 linux host plus qemu-e2k-static from $qemu_date

built $(date -u +%F) from

- $lcc_url
- $qemu_url

\`\`\`sh
sudo ./setup.sh
export PATH=/opt/mcst/$ver_dir/bin:\$PATH
lcc -O2 -o hello hello.c
./emulator/qemu-e2k -L /opt/mcst/$ver_dir/fs ./hello
\`\`\`

sha512 of the originals is in SHA512SUMS
EOF

# symlinks stay symlinks so the zip does not carry every library twice
log "packing $ZIP"
python3 - "$WORK/tree" "$OUT/$ZIP.tmp" <<'PY'
import os, stat, sys
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
root, out = sys.argv[1], sys.argv[2]
with ZipFile(out, "w", ZIP_DEFLATED, compresslevel=6) as z:
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames.sort()
        for name in sorted(dirnames + filenames):
            path = os.path.join(dirpath, name)
            arc = os.path.relpath(path, root)
            st = os.lstat(path)
            if stat.S_ISLNK(st.st_mode):
                info = ZipInfo(arc)
                info.create_system = 3
                info.external_attr = (stat.S_IFLNK | 0o777) << 16
                z.writestr(info, os.readlink(path))
            elif stat.S_ISREG(st.st_mode):
                z.write(path, arc)
PY
unzip -tq "$OUT/$ZIP.tmp"

# test what actually ships, unpacked from the zip
t="$WORK/test"; mkdir -p "$t"
unzip -q "$OUT/$ZIP.tmp" -d "$t"
sudo sh "$t/elbrus-toolchain/setup.sh"
lcc_home="/opt/mcst/$ver_dir"
qemu="$t/elbrus-toolchain/emulator/qemu-e2k"
"$lcc_home/bin/l++" --version
file "$qemu"
printf '#include <stdio.h>\nint main(void) { puts("e2k toolchain ok"); return 0; }\n' > "$t/hello.c"
printf '#include <iostream>\nint main() { std::cout << "e2k toolchain ok\\n"; return 0; }\n' > "$t/hello.cpp"
"$lcc_home/bin/lcc" -O2 -static -o "$t/hello-c" "$t/hello.c"
"$lcc_home/bin/l++" -O2 -o "$t/hello-cpp" "$t/hello.cpp"
for b in hello-c hello-cpp; do
  file "$t/$b" | tee /dev/stderr | grep -qiE 'elbrus|e2k' || { log "$b is not an e2k binary"; exit 1; }
  [ "$("$qemu" -L "$lcc_home/fs" "$t/$b")" = "e2k toolchain ok" ] || { log "$b did not run under qemu-e2k"; exit 1; }
done
log "test build ran under qemu-e2k"

# only now the new zip becomes the real one
mv "$OUT/$ZIP.tmp" "$OUT/$ZIP"
cp "$src/$lcc_file" "$src/qemu-e2k-static" "$OUT/"
cp "$tree/metadata.json" "$tree/setup.sh" "$tree/SHA512SUMS" "$WORK/"
zip_sha256=$(sha256sum "$OUT/$ZIP" | cut -d' ' -f1)
log "new $ZIP sha256 $zip_sha256"

output changed true
output lcc_version "$lcc_version"
output qemu_date "$qemu_date"
output ver_dir "$ver_dir"
output zip_sha256 "$zip_sha256"
