import { ExternalLink, Download, Globe } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { useLanguage } from '../lib/i18n'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="px-4 py-12 sm:px-6 bg-[var(--bg-main)]">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <span className="text-sm font-semibold text-[var(--text-main)]">
              e2k-toolchain
            </span>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://dev.mcst.ru/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{t.footer.mcstSource}</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>

            <a
              href="https://github.com/varyashine/e2k-toolchain/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t.footer.releases}</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>

            <a
              href="https://github.com/varyashine/e2k-toolchain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>{t.footer.repo}</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimer Line */}
        <div className="pt-6 text-xs text-[var(--text-dim)] leading-relaxed space-y-1">
          <p>{t.footer.legalRu}</p>
          <p className="text-[11px] text-[var(--text-dim)]/80">{t.footer.legalEn}</p>
        </div>
      </div>
    </footer>
  )
}
