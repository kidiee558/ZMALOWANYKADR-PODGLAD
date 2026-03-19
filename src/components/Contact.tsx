import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import PageLayout from './PageLayout';

export default function Contact() {
  return (
    <PageLayout title={<>Stwórzmy razem <span className="font-['MonteCarlo'] lowercase bloom-white text-5xl md:text-7xl">Historię</span></> as any} subtitle="Kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div className="space-y-8">
          <p className="text-[var(--color-text-muted)] text-lg font-light mb-12 max-w-md">
            Masz pytania? Chcesz zarezerwować termin sesji? Napisz do mnie lub zadzwoń. Z przyjemnością odpowiem na każdą wiadomość.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Telefon</p>
                <a href="tel:+48123456789" className="text-xl font-serif text-white hover:text-[var(--color-accent)] transition-colors">
                  +48 123 456 789
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Email</p>
                <a href="mailto:kontakt@zmalowanykadr.pl" className="text-xl font-serif text-white hover:text-[var(--color-accent)] transition-colors">
                  kontakt@zmalowanykadr.pl
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Lokalizacja</p>
                <p className="text-xl font-serif text-white">
                  Polska, Działam na terenie całego kraju
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[var(--color-bg)] p-8 md:p-12 rounded-sm border border-white/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="jan@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Rodzaj sesji</label>
              <select
                id="type"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none"
              >
                <option value="" className="bg-[var(--color-bg)] text-white">Wybierz rodzaj sesji</option>
                <option value="slub" className="bg-[var(--color-bg)] text-white">Reportaż Ślubny</option>
                <option value="portret" className="bg-[var(--color-bg)] text-white">Sesja Portretowa</option>
                <option value="rodzina" className="bg-[var(--color-bg)] text-white">Sesja Rodzinna</option>
                <option value="inne" className="bg-[var(--color-bg)] text-white">Inne</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Wiadomość</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                placeholder="Opowiedz mi o swoich oczekiwaniach..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-accent)] text-black font-medium tracking-widest uppercase text-sm hover:bg-[var(--color-accent-light)] transition-colors rounded-sm mt-8"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
