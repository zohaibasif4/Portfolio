import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
  ]
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-0 bg-white/[0.03] py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric via-purple to-magenta p-[1px]">
            <div className="w-full h-full bg-space-900 rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="font-syne font-bold text-xl tracking-wide">
            ZOHAIB<span className="text-electric">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-electric to-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdmTXkwPWhZJPrZCXlhnXKvwHjmhXkccPHlmJBLPChksbCCQQvlkcQTfMQdHgPnbgkzHjBmSWkqVWsCwMvkZHpvCbWKBbFPXvhWsPdBvXMqLfMqV"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/50 transition-all duration-300 text-sm font-medium flex items-center gap-2"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden glass-panel border-t border-white/10 mt-4"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-gray-300 hover:text-white py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdmTXkwPWhZJPrZCXlhnXKvwHjmhXkccPHlmJBLPChksbCCQQvlkcQTfMQdHgPnbgkzHjBmSWkqVWsCwMvkZHpvCbWKBbFPXvhWsPdBvXMqLfMqV"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-electric to-purple text-white font-medium"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
