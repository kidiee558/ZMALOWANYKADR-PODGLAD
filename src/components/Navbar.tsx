import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Strona Główna', href: '/' },
    { name: 'O mnie', href: '/o-mnie' },
    { name: 'Oferta', href: '/oferta' },
    { name: 'Opinie', href: '/opinie' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-white font-['MonteCarlo'] text-2xl md:text-3xl tracking-widest">
          Zmalowany Kadr
        </Link>
        {/* Hamburger Menu Toggle */}
        <button
          className="text-white hover:text-[var(--color-accent)] transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Fullscreen/Overlay Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 shadow-2xl"
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl uppercase tracking-widest text-white hover:text-[var(--color-accent)] transition-colors font-serif"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
