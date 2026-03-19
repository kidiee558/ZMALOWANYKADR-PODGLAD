import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Wszystkie', 'Ślubne', 'Rodzinne', 'Portretowe', 'Lifestyle'];

const photos = [
  { id: 1, category: 'Ślubne', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', alt: 'Sesja Ślubna' },
  { id: 2, category: 'Portretowe', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', alt: 'Portret' },
  { id: 3, category: 'Rodzinne', src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop', alt: 'Sesja Rodzinna' },
  { id: 4, category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', alt: 'Lifestyle' },
  { id: 5, category: 'Ślubne', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', alt: 'Ślub' },
  { id: 6, category: 'Portretowe', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop', alt: 'Portret Kobiety' },
  { id: 7, category: 'Rodzinne', src: 'https://images.unsplash.com/photo-1542037104857-ffcb0b96fa05?q=80&w=2054&auto=format&fit=crop', alt: 'Rodzina' },
  { id: 8, category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop', alt: 'Lifestyle Kobieta' },
  { id: 9, category: 'Ślubne', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop', alt: 'Para Młoda' },
  { id: 10, category: 'Portretowe', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', alt: 'Portret Mężczyzny' },
  { id: 11, category: 'Rodzinne', src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop', alt: 'Dziecko' },
  { id: 12, category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1516483638261-f40af5edca57?q=80&w=2070&auto=format&fit=crop', alt: 'Kawa' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');

  const filteredPhotos = activeCategory === 'Wszystkie' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4 font-medium"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight"
          >
            Wybrane <span className="italic font-light text-[var(--color-accent-light)]">Kadry</span>
          </motion.h3>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${
                  activeCategory === category
                    ? 'text-[var(--color-accent)] border-[var(--color-accent)]'
                    : 'text-[var(--color-text-muted)] border-transparent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Masonry Gallery - Full Width */}
      <motion.div layout className="masonry-grid px-2 md:px-4">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="masonry-item group relative overflow-hidden cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-[var(--color-accent)] text-xs uppercase tracking-widest mb-1">{photo.category}</p>
                  <p className="text-white font-serif text-xl">{photo.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 text-center mt-16">
        <a
          href="https://share.google/sw2JHMb5K7AzvtkUh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm hover:bg-[var(--color-accent)] hover:text-black transition-colors rounded-sm"
        >
          Zobacz więcej na Google
        </a>
      </div>
    </section>
  );
}
