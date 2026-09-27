# e2k toolchain

mcst lcc 1.31.05 cross compiler for elbrus e2k v6 (2c3 12c 16c) on an x86_64 linux host plus a static qemu-e2k to run what it builds

## releases

`lcc-1.31.05` has

| file | what |
|---|---|
| `elbrus_cross_compiler_toolchain.zip` | everything unpacked and ready, compiler sysroot qemu and setup.sh |
| `cross-sp-public-osl-1.31.05.e2k-v6.2c3.linux-6.1_64.tgz` | the original public cross package from mcst |
| `qemu-e2k-static` | the original static qemu-e2k 1.2 |

sha256 of the zip

```
ef0688b494bf6731e1dc8d70fa4d795e7270fb1ec2c6ad696453e677d309e884
```

sha512 of the originals is in `SHA512SUMS`

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
