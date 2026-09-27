import { useState } from 'react'
import { Terminal, Copy, Check, Info } from 'lucide-react'

export function QuickStart() {
  const [copiedZip, setCopiedZip] = useState(false)
  const [copiedTar, setCopiedTar] = useState(false)

  const zipCommands = `unzip elbrus_cross_compiler_toolchain.zip
cd elbrus-toolchain
sudo ./setup.sh
export PATH=/opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/bin:$PATH
lcc -O2 -o hello hello.c
./emulator/qemu-e2k -L /opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/fs ./hello`

  const tarCommand = `sudo tar xzf cross-sp-public-osl-1.31.05.e2k-v6.2c3.linux-6.1_64.tgz -C /`

  const handleCopyZip = () => {
    navigator.clipboard.writeText(zipCommands)
    setCopiedZip(true)
    setTimeout(() => setCopiedZip(false), 2000)
  }

  const handleCopyTar = () => {
    navigator.clipboard.writeText(tarCommand)
    setCopiedTar(true)
    setTimeout(() => setCopiedTar(false), 2000)
  }

  return (
    <section id="quick-start" className="border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              quick start
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
              unpack, symlink sysroot, compile, and run under qemu-e2k
            </p>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--code-bg)] overflow-hidden shadow-md">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                <Terminal className="h-3.5 w-3.5 text-accent" />
                bash
              </span>
            </div>

            <button
              onClick={handleCopyZip}
              className="inline-flex items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-main)] px-2.5 py-1 text-xs text-[var(--text-muted)] hover:border-accent hover:text-accent transition-colors"
              aria-label="copy commands"
            >
              {copiedZip ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent" />
                  <span className="text-accent">copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>copy commands</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <pre className="p-4 text-xs sm:text-sm text-[var(--text-main)] overflow-x-auto leading-relaxed font-mono">
            <code>
              <span className="text-[var(--text-dim)]"># 1. extract full bundle</span>{'\n'}
              <span className="text-accent font-semibold">$</span> unzip elbrus_cross_compiler_toolchain.zip{'\n'}
              <span className="text-accent font-semibold">$</span> cd elbrus-toolchain{'\n\n'}
              <span className="text-[var(--text-dim)]"># 2. symlink to /opt/mcst (lcc expects compiler components at /opt/mcst)</span>{'\n'}
              <span className="text-accent font-semibold">$</span> sudo ./setup.sh{'\n\n'}
              <span className="text-[var(--text-dim)]"># 3. add cross-compiler to PATH</span>{'\n'}
              <span className="text-accent font-semibold">$</span> export PATH=/opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/bin:$PATH{'\n\n'}
              <span className="text-[var(--text-dim)]"># 4. compile C source for elbrus e2k</span>{'\n'}
              <span className="text-accent font-semibold">$</span> lcc -O2 -o hello hello.c{'\n\n'}
              <span className="text-[var(--text-dim)]"># 5. run elbrus binary on x86_64 host via qemu-e2k</span>{'\n'}
              <span className="text-accent font-semibold">$</span> ./emulator/qemu-e2k -L /opt/mcst/lcc-1.31.05.e2k-v6.2c3.linux-6.1/fs ./hello
            </code>
          </pre>
        </div>

        {/* Note on setup.sh */}
        <div className="mt-4 flex items-start gap-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-xs text-[var(--text-muted)]">
          <Info className="h-4 w-4 shrink-0 text-accent mt-0.5" />
          <p className="leading-relaxed">
            <span className="text-[var(--text-main)] font-semibold">setup.sh note:</span> setup.sh only symlinks the unpacked compiler to <code className="text-accent">/opt/mcst</code> because lcc looks for its parts under that exact path.
          </p>
        </div>

        {/* Alternative: original package */}
        <div className="mt-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-[var(--text-main)]">
              or install directly from original mcst archive:
            </span>
            <button
              onClick={handleCopyTar}
              className="self-start sm:self-auto inline-flex items-center gap-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-main)] px-2 py-0.5 text-[11px] text-[var(--text-muted)] hover:border-accent hover:text-accent transition-colors"
            >
              {copiedTar ? <Check className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
              <span>{copiedTar ? 'copied' : 'copy'}</span>
            </button>
          </div>
          <pre className="rounded bg-[var(--code-bg)] p-2.5 text-xs text-[var(--text-main)] overflow-x-auto font-mono">
            <code>sudo tar xzf cross-sp-public-osl-1.31.05.e2k-v6.2c3.linux-6.1_64.tgz -C /</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
