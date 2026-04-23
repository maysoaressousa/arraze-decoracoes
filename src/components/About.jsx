import { Target, Eye, Gem } from 'lucide-react';

export default function About() {
  const values = [
    { title: "Missão", desc: "Transformar espaços em experiências sensoriais inesquecíveis.", icon: Target },
    { title: "Visão", desc: "Ser referência nacional em decorações de alto padrão até 2030.", icon: Eye },
    { title: "Valores", desc: "Ética, exclusividade, pontualidade e paixão por detalhes.", icon: Gem },
  ];

  return (
    <section id="sobre" className="py-24 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000" 
              alt="Evento Arraze" 
              className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold opacity-50"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-gold italic">Arraze: Onde o luxo encontra a arte.</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Com mais de uma década de experiência no mercado de eventos, a Arraze nasceu do desejo de criar cenários que contam histórias. Não apenas decoramos festas; nós materializamos sonhos através de uma curadoria rigorosa de mobiliário, flores e iluminação.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-gold/10 bg-white/5 hover:bg-white/10 transition-colors">
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