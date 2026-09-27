import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Language = 'en' | 'ru'

export interface Translations {
  header: {
    status: string
    github: string
  }
  hero: {
    badge: string
    tagline: string
    description: string
    download: string
    github: string
    targetsLabel: string
  }
  quickStart: {
    title: string
    subtitle: string
    copy: string
    copied: string
    step1: string
    step2: string
    step3: string
    step4: string
    step5: string
    setupNoteTitle: string
    setupNoteText: string
    altTitle: string
  }
  releases: {
    title: string
    subtitle: string
    recommendedBadge: string
    mirrorBadge: string
    emulatorBadge: string
    zipDesc: string
    tarDesc: string
    qemuDesc: string
    zipHash: string
    tarHash: string
    qemuHash: string
    securityBanner: string
    viewAssets: string
  }
  updates: {
    title: string
    subtitle: string
    frequency: string
    step1Title: string
    step1Desc: string
    step1Detail: string
    step2Title: string
    step2Desc: string
    step2Detail: string
    step3Title: string
    step3Desc: string
    step3Detail: string
    step4Title: string
    step4Desc: string
    step4Detail: string
    pinTitle: string
    pinDesc: string
    guaranteeTitle: string
    guaranteeDesc: string
  }
  usedBy: {
    title: string
    subtitle: string
    gameDesc: string
    tag1: string
    tag2: string
    viewRepo: string
  }
  footer: {
    desc: string
    mcstSource: string
    releases: string
    repo: string
    legalRu: string
    legalEn: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      status: 'lcc 1.31.05',
      github: 'github',
    },
    hero: {
      badge: 'target e2k-v6.2c3.linux-6.1_64 · lcc 1.31.05',
      tagline: 'lcc for elbrus e2k on any x86_64 linux',
      description: 'public mirror of mcst lcc cross-compiler for elbrus processors (e2k architecture). build and run elbrus binaries on x86_64 linux hosts with included sysroot and static qemu-e2k emulator without physical hardware.',
      download: 'download latest',
      github: 'github',
      targetsLabel: 'e2k v6 targets:',
    },
    quickStart: {
      title: 'quick start',
      subtitle: 'unpack, symlink sysroot, compile, and run under qemu-e2k',
      copy: 'copy commands',
      copied: 'copied',
      step1: '# 1. extract full bundle',
      step2: '# 2. symlink to /opt/mcst (lcc expects compiler components at /opt/mcst)',
      step3: '# 3. add cross-compiler to PATH',
      step4: '# 4. compile C source for elbrus e2k',
      step5: '# 5. run elbrus binary on x86_64 host via qemu-e2k',
      setupNoteTitle: 'setup.sh note:',
      setupNoteText: 'setup.sh only symlinks the unpacked compiler to /opt/mcst because lcc looks for its parts under that exact path.',
      altTitle: 'or install directly from original mcst archive:',
    },
    releases: {
      title: "what's in a release",
      subtitle: 'every release contains three standalone assets',
      recommendedBadge: 'recommended',
      mirrorBadge: 'official mirror',
      emulatorBadge: 'emulator',
      zipDesc: 'everything unpacked and ready: compiler, sysroot, qemu, setup.sh',
      tarDesc: 'the original public cross package from dev.mcst.ru',
      qemuDesc: 'the original static qemu-e2k emulator from mcst',
      zipHash: 'sha256 in release notes',
      tarHash: 'sha512 in SHA512SUMS',
      qemuHash: 'sha512 in SHA512SUMS',
      securityBanner: 'sha256 of the zip is published in release notes; sha512 of upstream originals is tracked in SHA512SUMS',
      viewAssets: 'view latest assets',
    },
    updates: {
      title: 'how updates work',
      subtitle: 'automated daily verification pipeline in github actions',
      frequency: 'daily at 06:17 UTC',
      step1Title: 'check',
      step1Desc: 'downloads new lcc or qemu-e2k when published on dev.mcst.ru',
      step1Detail: 'curl --pinnedpubkey (pinned certificate, trusts no CA)',
      step2Title: 'verify sha-512',
      step2Desc: 'validates cryptographic integrity against official checksums on mcst site',
      step2Detail: 'strict match required before processing',
      step3Title: 'build',
      step3Desc: 'assembles ready-to-run all-in-one zip archive with compiler, sysroot, and qemu',
      step3Detail: 'packages setup.sh and sets executable permissions',
      step4Title: 'test under qemu',
      step4Desc: 'compiles c and c++ hello binaries and runs both under qemu-e2k',
      step4Detail: 'release published only if test binaries run cleanly',
      pinTitle: 'pinned public key',
      pinDesc: "dev.mcst.ru uses a self-signed certificate, so the update script pins the server's public key (curl --pinnedpubkey) instead of trusting any certificate authority.",
      guaranteeTitle: 'release guarantee',
      guaranteeDesc: 'a release goes out only if all tests pass. if dev.mcst.ru is unreachable or any test fails, no release is made. old releases stay as they are.',
    },
    usedBy: {
      title: 'used by',
      subtitle: 'real-world automated builds in continuous integration',
      gameDesc: 'a text adventure written in C99, built by CI with this e2k toolchain and played to completion under qemu-e2k emulator.',
      tag1: 'automated e2k compilation',
      tag2: 'full gameplay validation under qemu-e2k',
      viewRepo: 'view repository',
    },
    footer: {
      desc: 'public mirror of mcst lcc cross-compiler for elbrus e2k on x86_64 linux',
      mcstSource: 'mcst source',
      releases: 'releases',
      repo: 'repository',
      legalRu: 'LCC — продукт АО «МЦСТ», здесь зеркалится публичный пакет cross-sp-public-osl без изменений.',
      legalEn: 'LCC is a product of MCST JSC. This repository mirrors the public cross-sp-public-osl package without modifications.',
    },
  },
  ru: {
    header: {
      status: 'lcc 1.31.05',
      github: 'github',
    },
    hero: {
      badge: 'таргет e2k-v6.2c3.linux-6.1_64 · lcc 1.31.05',
      tagline: 'lcc для эльбрус e2k на любом x86_64 linux',
      description: 'публичное зеркало кросс-компилятора мцст lcc для процессоров эльбрус (архитектура e2k). сборка и запуск программ под эльбрус на хосте x86_64 linux с готовым sysroot и статическим эмулятором qemu-e2k без самого эльбруса.',
      download: 'скачать свежий релиз',
      github: 'github',
      targetsLabel: 'целевые процессоры e2k v6:',
    },
    quickStart: {
      title: 'быстрый старт',
      subtitle: 'распаковка, симлинк sysroot, компиляция и запуск под qemu-e2k',
      copy: 'скопировать команды',
      copied: 'скопировано',
      step1: '# 1. распаковка архива со всем необходимым',
      step2: '# 2. симлинк в /opt/mcst (lcc ищет свои компоненты по этому пути)',
      step3: '# 3. добавление кросс-компилятора в PATH',
      step4: '# 4. компиляция программы на C под эльбрус',
      step5: '# 5. запуск собранного бинарника на x86_64 через qemu-e2k',
      setupNoteTitle: 'заметка о setup.sh:',
      setupNoteText: 'setup.sh только делает симлинк в /opt/mcst, потому что lcc ищет свои части по этому пути.',
      altTitle: 'или установка из оригинального архива мцст:',
    },
    releases: {
      title: 'состав релиза',
      subtitle: 'в каждом релизе три готовых файла',
      recommendedBadge: 'рекомендуется',
      mirrorBadge: 'оригинал',
      emulatorBadge: 'эмулятор',
      zipDesc: 'всё распаковано и готово: компилятор, sysroot, qemu, setup.sh',
      tarDesc: 'оригинальный публичный пакет с dev.mcst.ru',
      qemuDesc: 'оригинальный статический эмулятор qemu-e2k от мцст',
      zipHash: 'sha256 в описании релиза',
      tarHash: 'sha512 в SHA512SUMS',
      qemuHash: 'sha512 в SHA512SUMS',
      securityBanner: 'sha256 архива zip публикуется в описании релиза; sha512 оригиналов зафиксирован в SHA512SUMS',
      viewAssets: 'файлы релиза',
    },
    updates: {
      title: 'как работает автообновление',
      subtitle: 'ежедневный пайплайн проверки и сборки в github actions',
      frequency: 'каждый день в 06:17 UTC',
      step1Title: 'проверка',
      step1Desc: 'скачивает новую версию lcc или qemu-e2k при появлении на dev.mcst.ru',
      step1Detail: 'curl --pinnedpubkey (закрепленный ключ, не доверяет CA)',
      step2Title: 'сверка sha-512',
      step2Desc: 'сверяет sha-512 с контрольными суммами на сайте мцст',
      step2Detail: 'строгое совпадение до начала обработки',
      step3Title: 'сборка',
      step3Desc: 'собирает готовый all-in-one zip с компилятором, sysroot и qemu',
      step3Detail: 'упаковывает setup.sh и выставляет права на запуск',
      step4Title: 'тест под qemu',
      step4Desc: 'компилирует hello на c и c++ и запускает оба под qemu-e2k',
      step4Detail: 'релиз выходит, только если оба теста прошли',
      pinTitle: 'закрепленный публичный ключ',
      pinDesc: 'у dev.mcst.ru самоподписанный сертификат, поэтому скрипт закрепляет публичный ключ сервера (curl --pinnedpubkey) и не доверяет никакому ca.',
      guaranteeTitle: 'гарантия стабильности',
      guaranteeDesc: 'релиз выходит, только если всё прошло. если dev.mcst.ru недоступен или упал тест, релиз не создается. старые релизы не трогаются.',
    },
    usedBy: {
      title: 'реальный пример',
      subtitle: 'автоматическая сборка и тестирование игры в CI',
      gameDesc: 'текстовая игра на C99, которую CI собирает этим тулчейном и проходит до победы под qemu-e2k.',
      tag1: 'автоматическая кросс-компиляция под e2k',
      tag2: 'полное прохождение игры под qemu-e2k',
      viewRepo: 'репозиторий проекта',
    },
    footer: {
      desc: 'публичное зеркало кросс-компилятора мцст lcc для эльбрус e2k на хосте x86_64 linux',
      mcstSource: 'источник мцст',
      releases: 'релизы',
      repo: 'репозиторий',
      legalRu: 'LCC — продукт АО «МЦСТ», здесь зеркалится публичный пакет cross-sp-public-osl без изменений.',
      legalEn: 'LCC is a product of MCST JSC. This repository mirrors the public cross-sp-public-osl package without modifications.',
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('e2k_lang')
    if (saved === 'ru' || saved === 'en') return saved
    if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('ru')) {
      return 'ru'
    }
    return 'en'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('e2k_lang', lang)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
