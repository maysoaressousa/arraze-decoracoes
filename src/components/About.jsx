import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';
import aboutImg from '../assets/SAVE_20260423_091108.jpg';

export default function About() {
  const values = [
    { title: "Missão", desc: "Transformar espaços em experiências sensoriais inesquecíveis.", icon: Target },
    { title: "Visão", desc: "Ser referência nacional em decorações de alto padrão até 2030.", icon: Eye },
    { title: "Valores", desc: "Ética, exclusividade, pontualidade e paixão por detalhes.", icon: Gem },
  ];

  return (
    <section id="sobre" className="py-24 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Coluna da Esquerda: Imagem com moldura dourada */}
          <div className="relative sticky top-24">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold opacity-50"></div>
            <img
              src={aboutImg}
              alt="Francisco Lennon - Arraze"
              className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold opacity-50"></div>
          </div>

          {/* Coluna da Direita: Texto e Valores */}
          <div className="flex flex-col gap-8">
            <div>
              
              {/* História do Fundador */}
              <h2 className="text-4xl font-serif font-bold mb-6 text-black italic">Arraze: por Lennon Sousa</h2>

              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Francisco Lennon carrega no coração uma sensibilidade que o mundo ainda iria descobrir. 
                  Ainda criança, encontrava no desenho uma forma silenciosa de se expressar, como se suas 
                  mãos já soubessem transformar sentimentos em arte.
                </p>
                <p>
                  Foi também na infância que nasceu um amor que marcaria toda a sua vida: a devoção por 
                  Nossa Senhora. Aos oito anos, recebeu uma imagem de Nossa Senhora das Graças — um presente 
                  que se tornaria símbolo de fé e inspiração constante.
                </p>
                <p>
                  Em cada detalhe, Lennon coloca não apenas beleza, mas devoção. A vida exigiu escolhas práticas, 
                  mas o dom despertou definitivamente ao montar um altar na casa de uma amiga. Ali, ele percebeu 
                  que podia transformar sonhos em cenários.
                </p>
                <p>
                  Incentivado por amigos e movido por coragem, ele deixou as paredes do quarto para construir 
                  seu nome no mercado cearense. Hoje, Francisco Lennon não apenas decora espaços — ele espalha 
                  emoção e reconhece que cada passo dado com fé o conduziu até este momento grandioso.
                </p>
              </div>
            </div>

            {/* Cards de Missão, Visão e Valores */}
            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-gold/20">
              {values.map((v, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-4 border border-gold/10 bg-white/5 hover:bg-white/10 transition-colors rounded-sm"
                >
                  <v.icon className="text-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-1">{v.title}</h4>
                    <p className="text-sm text-gray-300">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}