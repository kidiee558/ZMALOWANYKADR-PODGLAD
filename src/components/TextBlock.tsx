import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface TextBlockProps {
  text: string;
  subtext: string;
}

export default function TextBlock({ text, subtext }: TextBlockProps) {
  return (
    <section className="py-32 bg-[var(--color-bg)] text-white flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-3xl leading-tight">
        {text.replace('ulotne', '')} <span className="font-['MonteCarlo'] text-5xl md:text-7xl">ulotne</span>.
      </h2>
      <p className="max-w-4xl text-lg md:text-2xl font-serif text-white leading-relaxed mb-12">
        {subtext}
      </p>
      <Link 
        to="/kontakt"
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-lg"
      >
        Zarezerwuj termin
      </Link>
    </section>
  );
}
