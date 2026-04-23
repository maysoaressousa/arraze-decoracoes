import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const feedback = [
  { name: "Mariana Silva", text: "A Arraze transformou meu casamento em um conto de fadas. Cada detalhe em dourado estava impecável!", role: "Noiva" },
  { name: "Roberto Costa", text: "Profissionalismo raro. O evento da nossa empresa foi elogiado por todos os diretores.", role: "CEO Tech Corp" },
  { name: "Carla Mendes", text: "A decoração personalizada superou todas as minhas expectativas. Sofisticação pura.", role: "Arquiteta" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Quote className="text-gold mx-auto mb-6 opacity-40" size={48} />
          <h2 className="text-3xl font-serif font-bold text-dark italic italic">O que dizem nossos clientes</h2>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {feedback.map((f, i) => (
            <SwiperSlide key={i} className="text-center">
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 italic">"{f.text}"</p>
              <h4 className="font-bold text-dark uppercase tracking-widest">{f.name}</h4>
              <span className="text-gold text-sm">{f.role}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}