import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const packages = [
  {
    name: 'Sesja Portretowa',
    price: 'od 400 zł',
    description: 'Idealna dla osób chcących uwiecznić swoje piękno lub potrzebujących profesjonalnych zdjęć wizerunkowych.',
    features: [
      '1-2 godziny sesji',
      '15 poddanych autorskiej obróbce zdjęć',
      'Galeria online zabezpieczona hasłem',
      'Pomoc w doborze stylizacji',
      'Odbitki 15x21 cm w eleganckim pudełku'
    ],
    highlighted: false
  },
  {
    name: 'Reportaż Ślubny',
    price: 'od 3500 zł',
    description: 'Kompleksowa obsługa fotograficzna Waszego najważniejszego dnia. Od przygotowań po oczepiny.',
    features: [
      'Do 12 godzin pracy fotografa',
      'Minimum 400 obrobionych zdjęć',
      'Krótka sesja plenerowa w dniu ślubu',
      'Prywatna galeria online dla gości',
      'Ekskluzywny fotoalbum 30x30 cm',
      'Pendrive w drewnianym etui'
    ],
    highlighted: true
  },
  {
    name: 'Sesja Rodzinna',
    price: 'od 500 zł',
    description: 'Naturalne, pełne emocji zdjęcia w plenerze lub w Waszym domu. Pamiątka na całe życie.',
    features: [
      'Do 2 godzin sesji',
      '20 poddanych autorskiej obróbce zdjęć',
      'Galeria online zabezpieczona hasłem',
      'Zdjęcia z najbliższymi (do 5 osób)',
      'Odbitki 15x21 cm w eleganckim pudełku'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <PageLayout 
      title={<>Pakiety <span className="font-['MonteCarlo'] lowercase bloom-white text-5xl md:text-7xl">Sesji</span></> as any} 
      subtitle="Oferta"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative p-8 md:p-10 rounded-sm border ${
              pkg.highlighted 
                ? 'border-[var(--color-accent)] bg-[var(--color-surface-light)]' 
                : 'border-white/10 bg-[var(--color-bg)]'
            } flex flex-col`}
          >
            {pkg.highlighted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                Najczęściej wybierane
              </div>
            )}
            
            <h4 className="text-2xl font-serif text-white mb-2">{pkg.name}</h4>
            <p className="text-[var(--color-text-muted)] text-sm mb-6 min-h-[60px]">{pkg.description}</p>
            <div className="text-3xl font-serif text-[var(--color-accent)] mb-8 pb-8 border-b border-white/10">
              {pkg.price}
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm">
                  <Check className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to="/kontakt"
              className={`w-full py-4 text-center text-sm uppercase tracking-widest font-medium transition-colors rounded-sm ${
                pkg.highlighted
                  ? 'bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-light)]'
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Zapytaj o termin
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
