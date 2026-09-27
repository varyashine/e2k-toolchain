import { Download, ArrowUpRight, Cpu } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import LetterGlitch from './LetterGlitch'
import DecryptedText from './DecryptedText'
import ShinyText from './ShinyText'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-[var(--border-subtle)] px-4 py-16 sm:px-6 sm:py-24">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25">
        <LetterGlitch
          glitchColors={['#064e3b', '#10b981', '#34d399', '#0f291e']}
          glitchSpeed={80}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters="E2K_MCST_LCC_V6_2C3_12C_16C_QEMU_0123456789"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Release Version Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 px-3.5 py-1.5 text-xs text-[var(--text-muted)] shadow-sm backdrop-blur mb-6">
          <Cpu className="h-3.5 w-3.5 text-accent" />
          <ShinyText
            text="target e2k-v6.2c3.linux-6.1_64 · lcc 1.31.05"
            color="var(--text-muted)"
            shineColor="#10b981"
            speed={3}
            className="font-medium"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-4">
          <DecryptedText
            text="e2k-toolchain"
            animateOn="view"
            speed={40}
            maxIterations={12}
            className="text-[var(--text-main)]"
            encryptedClassName="text-accent/60"
          />
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-accent font-medium tracking-tight mb-4">
          lcc for elbrus e2k on any x86_64 linux
        </p>

        {/* Short explanation */}
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-8">
          public mirror of mcst lcc cross-compiler for elbrus processors (e2k architecture). build and run elbrus binaries on x86_64 linux hosts with included sysroot and static qemu-e2k emulator without physical hardware.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/varyashine/e2k-toolchain/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-[#041d14] hover:bg-accent-light transition-all shadow-sm shadow-accent/20"
          >
            <Download className="h-4 w-4" />
            <span>download latest</span>
            <ArrowUpRight className="h-4 w-4 opacity-75" />
          </a>

          <a
            href="https://github.com/varyashine/e2k-toolchain"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] hover:border-accent hover:text-accent transition-all"
          >
            <GithubIcon className="h-4 w-4" />
            <span>github</span>
            <ArrowUpRight className="h-4 w-4 opacity-60" />
          </a>
        </div>

        {/* Hardware target info */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] text-[var(--text-dim)]">
          <span>e2k v6 targets:</span>
          <span className="rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] px-2 py-0.5 text-[var(--text-muted)]">Эльбрус-2С3</span>
          <span className="rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] px-2 py-0.5 text-[var(--text-muted)]">Эльбрус-12С</span>
          <span className="rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] px-2 py-0.5 text-[var(--text-muted)]">Эльбрус-16С</span>
        </div>
      </div>
    </section>
  )
}
