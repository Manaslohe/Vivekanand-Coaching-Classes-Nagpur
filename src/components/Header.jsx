import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/siteData'
import { handleSmoothAnchor } from '../utils/scroll'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[min(1120px,calc(100%_-_28px))] -translate-x-1/2 rounded-2xl border border-[#11183f]/10 bg-[#fff7ea]/90 px-3 py-3 shadow-[0_18px_50px_rgba(31,22,14,0.10)] backdrop-blur-xl sm:top-4 sm:px-6">
      <div className="flex items-center justify-between gap-5">
        <a
          href="#top"
          onClick={(event) => {
            handleSmoothAnchor(event, 'top', { offset: 0 })
            closeMenu()
          }}
          aria-label="VCC home"
          className="inline-flex shrink-0"
        >
          <img
            src="/logo.png"
            alt="Vivekanand Coaching Classes logo"
            className="h-12 w-24 object-contain sm:w-32"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-[calc(100%_+_10px)] flex-col gap-1 rounded-2xl bg-[#fffbf4] p-3 shadow-[0_24px_48px_rgba(31,22,14,0.14)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => {
                handleSmoothAnchor(event, id)
                closeMenu()
              }}
              className="rounded-xl px-3 py-3 text-sm font-black text-[#11183f] transition hover:bg-[#f8ead3] hover:text-[#dc6518] lg:px-0 lg:py-0 lg:hover:bg-transparent"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:7020253112"
            className="inline-flex items-center gap-2 text-sm font-black text-[#11183f]"
          >
            <span className="hidden sm:inline">Call Now</span>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#f58220] shadow-[0_16px_28px_rgba(31,22,14,0.10)]">
              <Phone size={17} />
            </span>
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#11183f] shadow-[0_16px_28px_rgba(31,22,14,0.10)] lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
