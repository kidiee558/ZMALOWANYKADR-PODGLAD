export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://raw.githubusercontent.com/kidiee558/ZmalowanyKadr/main/534839487_1596102238460728_6436801187349005686_n.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-['MonteCarlo'] text-6xl md:text-8xl lg:text-9xl text-white mb-6"
        >
          Zmalowany Kadr
        </h1>
        <div className="w-24 h-px bg-white/50 mb-6" />
        <h2
          className="font-['Cinzel'] text-3xl md:text-4xl lg:text-5xl text-white mb-2 tracking-normal"
        >
          SYLWIA KOZYRA
        </h2>
        <p
          className="text-sm md:text-base text-white/90 font-light tracking-widest uppercase mb-12"
        >
          Fotografia pełna emocji i wrażliwości
        </p>
      </div>
    </section>
  );
}
