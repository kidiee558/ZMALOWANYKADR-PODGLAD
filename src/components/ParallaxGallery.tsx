import { shuffledPhotos } from '../photos';

export default function ParallaxGallery() {
  return (
    <section className="bg-[var(--color-bg)] p-1">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
        {shuffledPhotos.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img 
              src={src} 
              alt={`Zdjęcie ${index + 1}`} 
              className="w-full h-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
