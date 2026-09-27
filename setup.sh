#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
VER=lcc-1.31.05.e2k-v6.2c3.linux-6.1
if [ "$(id -u)" -ne 0 ]; then
  exec sudo "$0" "$@"
fi
mkdir -p /opt/mcst
ln -sfn "$ROOT/lcc-cross" "/opt/mcst/$VER"
printf '%s\n' "LCC installed at /opt/mcst/$VER"
printf '%s\n' "Run: /opt/mcst/$VER/bin/l++ -O2 -o game main.cpp"
