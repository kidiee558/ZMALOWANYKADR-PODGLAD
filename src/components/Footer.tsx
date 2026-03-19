import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <Link to="/" className="flex flex-col items-center gap-2 group">
          <Camera className="w-8 h-8 text-white" />
          <span className="font-['MonteCarlo'] text-4xl text-white">
            Zmalowany Kadr
          </span>
        </Link>
        
        <p className="text-[var(--color-text-muted)] text-sm font-light text-center">
          &copy; {new Date().getFullYear()} Zmalowany Kadr - Sylwia Kozyra. Wszelkie prawa zastrzeżone.
        </p>
        
        <div className="flex items-center gap-6">
          <Link to="/regulamin" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
            Regulamin
          </Link>
          <Link to="/polityka-prywatnosci" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
            Polityka Prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
