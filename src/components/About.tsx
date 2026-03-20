import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    img: 'https://raw.githubusercontent.com/kidiee558/ZmalowanyKadr/main/autorka1.jpg',
    title: 'Pasja',
    desc: 'Fotografia to dla mnie coś więcej niż tylko praca – to pasja, sposób na wyrażenie siebie i możliwość zatrzymania czasu w najpiękniejszych momentach.'
  },
  {
    img: 'https://raw.githubusercontent.com/kidiee558/ZmalowanyKadr/main/autorka2.jpg',
    title: 'Proces',
    desc: 'Specjalizuję się w sesjach kobiecych, rodzinnych, narzeczeńskich oraz reportażach. Moim celem jest stworzenie atmosfery, w której poczujesz się swobodnie.'
  },
  {
    img: 'https://raw.githubusercontent.com/kidiee558/ZmalowanyKadr/main/autorka3.jpg',
    title: 'Emocje',
    desc: <>Każda sesja to dla mnie nowa historia do opowiedzenia. Pozwól mi uchwycić prawdziwe emocje i naturalne piękno, które zostaną z Tobą na zawsze.</>
  }
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-24 left-6 md:left-12 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors group bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm uppercase tracking-widest">Wstecz</span>
      </motion.button>

      {sections.map((section, index) => (
        <section key={index} className="relative h-screen w-full md:w-1/3 overflow-hidden">
          <img
            src={section.img}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-['MonteCarlo'] text-white mb-6 bloom-white"
            >
              {section.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-serif text-white/90 font-light max-w-sm md:max-w-md leading-relaxed"
            >
              {section.desc}
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  );
}
