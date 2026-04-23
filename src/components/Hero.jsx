import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000", title: "Momentos Inesquecíveis" },
  { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000", title: "Elegância em Detalhes" },
  { img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000", title: "Sua Festa, Nossa Arte" }
];

export default function Hero() {
  return (
    <section id="inicio" className="h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 drop-shadow-2xl animate-pulse">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl font-light tracking-widest uppercase">Decorações de luxo para quem não aceita menos que o topo.</p>
                <a href="#contato" className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark font-bold py-4 px-12 transition-all duration-500 uppercase tracking-widest">
                  Fale Conosco
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}