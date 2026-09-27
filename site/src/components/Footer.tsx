import { ExternalLink, Download, Globe } from 'lucide-react'
import { GithubIcon } from './GithubIcon'

export function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 bg-[var(--bg-main)]">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <span className="text-sm font-semibold text-[var(--text-main)]">
              e2k-toolchain
            </span>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              public mirror of mcst lcc cross-compiler for elbrus e2k on x86_64 linux
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
              <span>mcst source</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>

            <a
              href="https://github.com/varyashine/e2k-toolchain/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>releases</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>

            <a
              href="https://github.com/varyashine/e2k-toolchain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-accent transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>repository</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimer Line */}
        <div className="pt-6 text-xs text-[var(--text-dim)] leading-relaxed space-y-1">
          <p>
            LCC — продукт АО «МЦСТ», здесь зеркалится публичный пакет cross-sp-public-osl без изменений.
          </p>
          <p className="text-[11px] text-[var(--text-dim)]/80">
            LCC is a product of MCST JSC. This repository mirrors the public cross-sp-public-osl package without modifications.
          </p>
        </div>
      </div>
    </footer>
  )
}
