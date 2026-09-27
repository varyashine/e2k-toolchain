import { Clock, Search, ShieldCheck, Hammer, CheckCircle2, Lock } from 'lucide-react'
import { useLanguage } from '../lib/i18n'

export function UpdatesPipeline() {
  const { t } = useLanguage()

  const steps = [
    {
      num: '01',
      title: t.updates.step1Title,
      icon: Search,
      description: t.updates.step1Desc,
      detail: t.updates.step1Detail,
    },
    {
      num: '02',
      title: t.updates.step2Title,
      icon: ShieldCheck,
      description: t.updates.step2Desc,
      detail: t.updates.step2Detail,
    },
    {
      num: '03',
      title: t.updates.step3Title,
      icon: Hammer,
      description: t.updates.step3Desc,
      detail: t.updates.step3Detail,
    },
    {
      num: '04',
      title: t.updates.step4Title,
      icon: CheckCircle2,
      description: t.updates.step4Desc,
      detail: t.updates.step4Detail,
    },
  ]

  return (
    <section id="updates" className="border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              {t.updates.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
              {t.updates.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>{t.updates.frequency}</span>
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
              <div className="font-semibold text-[var(--text-main)] mb-1">{t.updates.pinTitle}</div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {t.updates.pinDesc}
              </p>
            </div>
          </div>

          {/* Release Guarantee */}
          <div className="flex items-start gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-xs">
            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[var(--text-main)] mb-1">{t.updates.guaranteeTitle}</div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {t.updates.guaranteeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
