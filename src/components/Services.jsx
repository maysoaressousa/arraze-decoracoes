import { Sparkles, Heart, Zap, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      icon: Palette, 
      title: "Decoração Personalizada", 
      desc: "Design exclusivo adaptado ao seu conceito e estilo pessoal." 
    },
    { 
      icon: Sparkles, 
      title: "Iluminação Luxuosa", 
      desc: "Ambientes iluminados com sofisticação e elegância inigualável." 
    },
    { 
      icon: Heart, 
      title: "Arranjos Florais", 
      desc: "Flores premium selecionadas para cada ocasião especial." 
    },
    { 
      icon: Zap, 
      title: "Consultoria de Eventos", 
      desc: "Orientação especializada desde o planejamento até a execução." 
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-dark mb-4">Nossos Serviços</h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">Excelência em Cada Detalhe</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 border border-gold/20 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-sm cursor-pointer">
              <service.icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-xl font-serif font-bold text-dark mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
