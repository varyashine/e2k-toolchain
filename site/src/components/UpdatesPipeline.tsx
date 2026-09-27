import { Clock, Search, ShieldCheck, Hammer, CheckCircle2, Lock } from 'lucide-react'

export function UpdatesPipeline() {
  const steps = [
    {
      num: '01',
      title: 'check',
      icon: Search,
      description: 'downloads new lcc or qemu-e2k when published on dev.mcst.ru',
      detail: 'curl --pinnedpubkey (pinned certificate, trusts no CA)',
    },
    {
      num: '02',
      title: 'verify sha-512',
      icon: ShieldCheck,
      description: 'validates cryptographic integrity against official checksums on mcst site',
      detail: 'strict match required before processing',
    },
    {
      num: '03',
      title: 'build',
      icon: Hammer,
      description: 'assembles ready-to-run all-in-one zip archive with compiler, sysroot, and qemu',
      detail: 'packages setup.sh and sets executable permissions',
    },
    {
      num: '04',
      title: 'test under qemu',
      icon: CheckCircle2,
      description: 'compiles c and c++ hello binaries and runs both under qemu-e2k',
      detail: 'release published only if test binaries run cleanly',
    },
  ]

  return (
    <section id="updates" className="border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              how updates work
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
              automated daily verification pipeline in github actions
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>daily at 06:17 UTC</span>
          </div>
        </div>

        {/* 4-Step Diagram/Timeline */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-accent font-mono">
                      {step.num}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded border border-[var(--border-subtle)] bg-[var(--bg-main)] text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-[var(--text-main)] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)]/60 text-[10px] text-[var(--text-dim)]">
                  {step.detail}
                </div>
              </div>
            )
          })}
        </div>

        {/* Security & Reliability Callouts */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {/* Public Key Pinning */}
          <div className="flex items-start gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-xs">
            <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[var(--text-main)] mb-1">pinned public key</div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                dev.mcst.ru uses a self-signed certificate, so the update script pins the server's public key (<code className="text-accent">curl --pinnedpubkey</code>) instead of trusting any certificate authority.
              </p>
            </div>
          </div>

          {/* Release Guarantee */}
          <div className="flex items-start gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-xs">
            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[var(--text-main)] mb-1">release guarantee</div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                a release goes out only if all tests pass. if dev.mcst.ru is unreachable or any test fails, no release is made. old releases stay as they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
