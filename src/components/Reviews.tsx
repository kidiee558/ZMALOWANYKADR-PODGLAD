import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import PageLayout from './PageLayout';

const reviews = [
  { name: 'Wiktoria Kiersztyn', text: 'Sesja biznesowa z Panią Sylwią była świetnym doświadczeniem! Otrzymałam mnóstwo cennych rad dotyczących pozowania, dzięki czemu na zdjęciach wyglądam profesjonalnie i naturalnie. Atmosfera podczas sesji była bardzo swobodna i przyjazna, co pozwoliło mi poczuć się komfortowo przed obiektywem. Jestem bardzo zadowolona z efektów polecam z całego serca!' },
  { name: 'Ilona Piela', text: 'Sylwia potrafi zaczarować zdjęcia i wydobyć piękno i magię, o których sami nie wiemy:). Widać, że fotografia to jej wielka pasja , a efekty sesji przechodzą nasze najśmielsze oczekiwania. Jest czarodziejką w swoim fachu, szczerze polecam Zmalowany Kadr:)' },
  { name: 'Joanna Wołos', text: 'Polecam z całego serca. Atmosfera na sesji wspaniała, mnóstwo komplementów :) Sylwia jest bardzo ciepłą i profesjonalną osobą. Kocha to czym się zajmuje i widać efekty w postaci wspaniałych zdjęć ❤️ Wrócę jeszcze nie raz 😊' },
  { name: 'Katarzyna Okońska', text: 'Do Sylwii trafiłam z polecenia przyjaciółek i to był strzał w 10! To była moja pierwsza sesja zdjęciowa i z ręką na sercu, lepiej trafić nie mogłam. Stres minął już po przekroczeniu progu studio. Sylwia jest bardzo przyjemną, ciepłą i życzliwą osobą ❤️ do tego profesjonalnie podchodzi do swojej pracy, zdjęcia mówią same za siebie. Miałam również wykonywany makijaż przez Sylwię, w którym czułam się pięknie i myślę, że to również dodało mi pewności siebie podczas sesji. I to dzięki niej uświadomiłam sobie, że z brzuszkiem i dodatkowymi ciążowymi kilogramami też można czuć się pięknie, nie tylko na sesji, ale przełożyło się to również na kolejne miesiące ciąży ❤️ Z całego serca polecam Sylwię! Do zobaczenia na sesji noworodkowej!' },
  { name: 'Anna Krupa', text: 'Serdecznie polecam usługi fotograficzne „Zmalowany kadr” - Sylwia Kozyra. Sylwia to profesjonalny fotograf. Zna się na rzeczy i wie co robi. Miałam okazje i przyjemność uczestniczyć w dwóch sesjach tej Pani fotograf i muszę przyznać, ze jestem bardzo zadowolona z efektów i współpracy z Sylwia. Atmosfera na sesji bardzo przyjemna i na luzie. Sylwia to przesympatyczna osoba. Każdy kto chce mieć super pamiątkę na lata dla siebie lub swojej rodziny w postaci zdjęć powinien skorzystać z usług - Sylwia Kozyra „Zmalowany Kadr”. Jest to firma naprawdę godna polecania!' },
  { name: 'Karolina M.', text: 'Gorąco polecam Panią Sylwię 😊 byłam pierwszy raz na sesji i nie wiedziałam jak pozować. Trochę się stresowałam ale okazało się że niepotrzebnie. Sylwia jest przemiła i zdolną osobą, która wszystko wyjaśniła i rozładowała cały stres, dzięki czemu zdjęcia wyszły przepiękne i będę mieć pamiątkę na lata 😉 Jeśli ktoś szuka fotografa na sesję zdjęciową lub okolicznościową to jeszcze raz bardzo polecam Zamalowany kadr 😊' },
  { name: 'Renata Sadowska', text: 'Niesamowite zdjęcia tworzy ta Kobieta, to chyba przez to że kocha to co robi ☺️. Wprowadza taką świetną atmosferę podczas sesji, aż chce się wracać. Polecam Sylwię ♥️ Pozdrawiam i do zobaczenia 😉' },
  { name: 'Dominika Dominik', text: 'Polecam Zmalowany Kadr Sylwia Kozyra. Mieliśmy rodzinną sesje świąteczną, zdjęcia wyszły pięknie. Pani Sylwia jest ciepłą i miłą osobą i ma dobre podejście do dzieci 🙂 Z przyjemnością wrócimy jeszcze raz na sesje do Pani Sylwi 🙂' },
  { name: 'Amanda Karchut', text: 'Polecam sesje u Pani Sylwii. Zdjęcia wykonane w pięknej scenerii przy mega fajnej atmosferze. Mieliśmy już dwie sesje i obie były śliczne. Jedyny problem pojawia się później przy wyborze, bo wszystkie zdjęcia są przepiękne ❤️😍 Na pewno skorzystamy jeszcze z usług ❤️' },
  { name: 'Katarzyna Blicharz', text: 'Gorąco polecam Zmalowany Kadr.Z Panią Sylwią spotkałyśmy się dwa razy za każdym razem atmosfera na sesji była jak na spotkanie z dobrą przyjaciółką. Podejście do dzieci mega ciepłe i profesjonalne wskazówki jak dobrze ustawić się do zdjęć' },
  { name: 'Klaudia Chruściel', text: 'Polecamy serdecznie Zmalowany Kadr Sylwia Kozyra. Dowiedzielismy sie o tym miejscu zupełnie przypadkowo,kolezanka wysłała nam post z FB. Była to sesja ciążowa,a na pewno wrócimy na inną,bo jesteśmy bardzo zadowoleni. Sylwia to bardzo ciepła,kontaktowa osoba,która wprowadza luźną atmosferę,a to bardzo wspiera podczas sesji. Zdjęcia super, pełny profesjonalizm,jest to dla nas piękna pamiątka. Dziękujemy i do zobaczenia 😍❤' },
  { name: 'Dominika', text: 'Polecam z całego serca! Sylwia jest tak pozytywną osobą, czujesz się luźno, jakbyś rozmawiała z koleżanką która już długo znasz 😊 super atmosfera podczas zdjęć! A efekty pracy - coś pięknego 😍😍 zdecydowanie wrócę na pewno 😊' }
];

export default function Reviews() {
  return (
    <PageLayout 
      title={<>Mnóstwo zadowolonych <span className="font-['MonteCarlo'] text-5xl md:text-7xl block md:inline mt-2 md:mt-0 bloom-white">klientów</span></> as any}
      subtitle="Opinie"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-6 flex-grow italic">
              "{review.text}"
            </p>
            <p className="font-serif text-xl text-white font-medium">{review.name}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <a
          href="https://www.google.com/search?q=Zmalowany+Kadr+Sylwia+Kozyra+Opinie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors bloom-white-box"
        >
          Zobacz więcej opinii w Google
        </a>
      </div>
    </PageLayout>
  );
}
