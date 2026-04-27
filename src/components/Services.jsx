import React from 'react';
/* Adicionei Building2 e PartyPopper aqui no import */
import { Sparkles, Heart, Zap, Palette, Building2, PartyPopper } from 'lucide-react';

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
    },
    { 
      icon: Zap, 
      title: "Locação Arraze", 
      desc: "Alugue itens e faça sua própria decoração com a qualidade Arraze." 
    },
    { 
      title: "Eventos Corporativos", 
      icon: Building2, 
      desc: "Design de ambiente focado na identidade da sua marca. Experiências de networking sofisticadas." 
    },
    { 
      title: "Celebrações Sociais", 
      icon: PartyPopper, 
      desc: "Aniversários e festas temáticas planejadas para surpreender e celebrar com estilo." 
    },
    { 
      title: "Consultoria Autoral", 
      icon: Sparkles, 
      desc: "O olhar artístico de Lennon Sousa para projetos exclusivos e cenografia autêntica." 
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-dark mb-4">Nossos Serviços</h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">Excelência em Cada Detalhe</p>
        </div>

        {/* O grid agora vai acomodar os 8 serviços perfeitamente em 2 linhas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 border border-gold/20 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-sm cursor-pointer flex flex-col h-full">
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