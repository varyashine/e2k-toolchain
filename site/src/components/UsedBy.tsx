import { Gamepad2, GitBranch, ExternalLink, Check } from 'lucide-react'
import { useLanguage } from '../lib/i18n'

export function UsedBy() {
  const { t } = useLanguage()

  return (
    <section id="used-by" className="border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            {t.usedBy.title}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
            {t.usedBy.subtitle}
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6 transition-all hover:border-accent/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-main)] text-accent">
                <Gamepad2 className="h-5 w-5" />
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-[var(--text-main)]">
                    cherrywheel/CN-Tower-C
                  </h3>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent border border-accent/25">
                    C99
                  </span>
                </div>

                <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                  {t.usedBy.gameDesc}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-[var(--text-dim)]">
                  <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                    <Check className="h-3 w-3 text-accent" />
                    {t.usedBy.tag1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                    <Check className="h-3 w-3 text-accent" />
                    {t.usedBy.tag2}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/cherrywheel/CN-Tower-C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 self-start sm:self-center shrink-0 rounded border border-[var(--border-subtle)] bg-[var(--bg-main)] px-3 py-1.5 text-xs font-semibold text-[var(--text-main)] hover:border-accent hover:text-accent transition-colors"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>{t.usedBy.viewRepo}</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
