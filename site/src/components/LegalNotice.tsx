import { useState } from 'react'
import { ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../lib/i18n'

export function LegalNotice() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
      >
        <span className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-accent shrink-0" />
          <span>{language === 'ru' ? 'Правовая информация и отказ от ответственности' : 'Legal Notice & Disclaimers'}</span>
        </span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] text-[var(--text-dim)] space-y-2.5 leading-relaxed">
          {language === 'ru' ? (
            <>
              <p>
                <strong className="text-[var(--text-main)]">1. Неофициальный проект:</strong> данный сайт и репозиторий являются независимым проектом сообщества разработчиков. Проект не связан с АО «МЦСТ», не спонсируется им и не имеет к компании никакого официального отношения.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">2. Открытый источник и целостность:</strong> здесь зеркалируются исключительно общедоступные пакеты, опубликованные АО «МЦСТ» в открытом доступе на сервере dev.mcst.ru/download/. Бинарные файлы не подвергаются модификациям или реверс-инжинирингу.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">3. Товарные знаки:</strong> «Эльбрус», «МЦСТ», «LCC» и соответствующие логотипы являются товарными знаками АО «МЦСТ». Их упоминание используется исключительно в информационных целях (номинативное использование) для указания целевой аппаратной архитектуры и совместимости.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">4. Некоммерческий статус:</strong> проект носит исключительно некоммерческий, исследовательский и образовательный характер. Платные услуги не оказываются, монетизация отсутствует.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">5. Отказ от ответственности:</strong> файлы предоставляются по принципу «как есть» (AS IS), без каких-либо явных или подразумеваемых гарантий.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-[var(--text-main)]">1. Unofficial & Independent:</strong> This website and repository are an independent community initiative. This project is not affiliated with, endorsed by, sponsored by, or in any way officially connected to JSC MCST.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">2. Public Upstream & Integrity:</strong> Mirrors only publicly available packages published by JSC MCST on dev.mcst.ru/download/. No binary modifications or reverse engineering are applied.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">3. Trademarks:</strong> "Elbrus", "MCST", "LCC" and related designations are trademarks of JSC MCST. They are referenced strictly for nominative fair use to describe platform and architecture compatibility.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">4. Non-Commercial Purpose:</strong> Strictly non-commercial and intended for academic, educational, and developer community experimentation without monetization.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">5. "As Is" Warranty Disclaimer:</strong> All files and instructions are provided "as is", without warranty of any kind, express or implied.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
