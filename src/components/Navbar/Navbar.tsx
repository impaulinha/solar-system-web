import { useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Planets', href: '#planets' },
] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-star-300/30 md:h-10 md:w-10">
            <span className="font-serif text-xs text-star-100 md:text-sm">
              SS
            </span>
          </div>
        </div>

        {/* links — apenas desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="group relative font-mono text-xs tracking-widest text-star-300 transition-colors duration-200 hover:text-star-100"
              >
                <span className="text-nebula-500">_</span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-nebula-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* botão hambúrguer — apenas mobile */}
        <button
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={handleToggle}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          <span
            className={cn(
              'h-px w-5 bg-star-200 transition-all duration-300',
              isOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'h-px w-5 bg-star-200 transition-all duration-300',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'h-px w-5 bg-star-200 transition-all duration-300',
              isOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </header>

      {/* overlay mobile */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-space-900/95 backdrop-blur-sm transition-all duration-500 md:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        <nav>
          <ul className="flex flex-col items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  'transition-all duration-500',
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
                style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={handleClose}
                  className="font-serif text-4xl font-light text-star-100 transition-colors duration-200 hover:text-nebula-400"
                >
                  <span className="font-mono text-lg text-nebula-500">_</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
