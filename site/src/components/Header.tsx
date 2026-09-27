import { Terminal, ExternalLink } from 'lucide-react'
import { GithubIcon } from './GithubIcon'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-[var(--border-active)] bg-[var(--bg-card)] text-accent">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="text-[var(--text-main)]">e2k-toolchain</span>
        </a>

        <div className="flex items-center gap-3 text-xs">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1 text-[var(--text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            lcc 1.31.05
          </span>

          <a
            href="https://github.com/varyashine/e2k-toolchain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1 text-[var(--text-main)] hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">github</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  )
}
