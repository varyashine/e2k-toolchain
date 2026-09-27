# e2k toolchain

mcst lcc 1.31.05 cross compiler for elbrus e2k v6 (2c3 12c 16c) on an x86_64 linux host plus a static qemu-e2k to run what it builds

## releases

each release has

| file | what |
|---|---|
| `elbrus_cross_compiler_toolchain.zip` | everything unpacked and ready, compiler sysroot qemu and setup.sh |
| `cross-sp-public-osl-<version>.e2k-v6.2c3.linux-6.1_64.tgz` | the original public cross package from mcst |
| `qemu-e2k-static` | the original static qemu-e2k |

sha256 of the zip is in the release notes and sha512 of the originals is in `SHA512SUMS`

## updates

`update.sh` runs every day in actions. when dev.mcst.ru has a newer lcc for e2k v6 2c3 or a newer qemu-e2k-static it downloads them, checks them against the sha512 published next to them, builds the zip, compiles a c and a c++ hello with it and runs both under qemu-e2k. only if all of that passes a new release goes out and `metadata.json` moves to it. old releases stay as they are

dev.mcst.ru signs its own certificate so the script pins its public key instead of trusting any ca. the certificate runs out on 2027-07-22 and after that the update fails until the pin in `update.sh` is checked and replaced

## use it

```sh
unzip elbrus_cross_compiler_toolchain.zip
cd elbrus-toolchain
sudo ./setup.sh
export PATH=/opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/bin:$PATH
lcc -O2 -o hello hello.c
./emulator/qemu-e2k -L /opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/fs ./hello
```

setup.sh only symlinks the unpacked compiler to `/opt/mcst` because lcc looks for its parts under that exact path

or from the original package

```sh
sudo tar xzf cross-sp-public-osl-1.31.05.e2k-v6.2c3.linux-6.1_64.tgz -C /
```

used by [cn tower](https://github.com/cherrywheel/CN-Tower-C) to ship an elbrus build
