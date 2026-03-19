import Hero from '../components/Hero';
import ParallaxGallery from '../components/ParallaxGallery';
import TextBlock from '../components/TextBlock';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20">
        <TextBlock 
          text="Uwiecznij to, co"
          subtext="Zapraszam Cię do mojego świata widzianego okiem obiektywu. Z wielką przyjemnością i wrażliwością uwiecznię dla Ciebie najważniejsze chwile, zamieniając emocje w piękne obrazy, które zostaną z Tobą na zawsze."
        />
      </div>
      <ParallaxGallery />
    </>
  );
}
