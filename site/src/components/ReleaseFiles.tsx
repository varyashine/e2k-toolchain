import { Archive, Package, Play, ShieldCheck, Download } from 'lucide-react'

export function ReleaseFiles() {
  const files = [
    {
      name: 'elbrus_cross_compiler_toolchain.zip',
      size: '~750 MB',
      type: 'all-in-one zip',
      description: 'everything unpacked and ready: compiler, sysroot, qemu, setup.sh',
      icon: Archive,
      badge: 'recommended',
      recommended: true,
      hashInfo: 'sha256 in release notes',
    },
    {
      name: 'cross-sp-public-osl-1.31.05.e2k-v6.2c3.linux-6.1_64.tgz',
      size: '290 MB',
      type: 'upstream tarball',
      description: 'the original public cross package from dev.mcst.ru',
      icon: Package,
      badge: 'official mirror',
      recommended: false,
      hashInfo: 'sha512 in SHA512SUMS',
    },
    {
      name: 'qemu-e2k-static',
      size: 'binary',
      type: 'static emulator',
      description: 'the original static qemu-e2k emulator from mcst',
      icon: Play,
      badge: 'emulator',
      recommended: false,
      hashInfo: 'sha512 in SHA512SUMS',
    },
  ]

  return (
    <section id="releases" className="border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            what's in a release
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
            every release contains three standalone assets
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {files.map((file) => {
            const Icon = file.icon
            return (
              <div
                key={file.name}
                className={`flex flex-col justify-between rounded-lg border p-4 transition-all ${
                  file.recommended
                    ? 'border-accent/40 bg-[var(--bg-card)] shadow-sm'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-card)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded border border-[var(--border-subtle)] bg-[var(--bg-main)] text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-medium ${
                        file.recommended
                          ? 'bg-accent/15 text-accent border border-accent/30'
                          : 'bg-[var(--bg-main)] text-[var(--text-dim)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {file.badge}
                    </span>
                  </div>

                  <code className="block text-xs font-semibold text-[var(--text-main)] break-all mb-2">
                    {file.name}
                  </code>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {file.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)]/60 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-accent">{file.size}</span>
                  <span className="text-[var(--text-dim)]">{file.hashInfo}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Checksum guarantee banner */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
            <span>sha256 of the zip is published in release notes; sha512 of upstream originals is tracked in SHA512SUMS</span>
          </div>
          <a
            href="https://github.com/varyashine/e2k-toolchain/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto text-accent hover:underline font-semibold"
          >
            <Download className="h-3.5 w-3.5" />
            <span>view latest assets</span>
          </a>
        </div>
      </div>
    </section>
  )
}
