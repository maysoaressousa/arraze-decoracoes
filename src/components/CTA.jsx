import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden bg-dark">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 text-gold">
          <Sparkles size={40} className="animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Sua celebração merece o toque <span className="text-gold italic">Arraze</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide">
          Não deixe o seu sonho para depois. Nossa equipe está pronta para transformar suas ideias em um cenário deslumbrante e sofisticado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/5585999999999?text=Olá!%20Vi%20o%20site%20da%20Arraze%20e%20gostaria%20de%20um%20orçamento." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-gold hover:bg-gold-dark text-dark font-bold py-5 px-10 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-2xl w-full sm:w-auto justify-center"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="uppercase tracking-[0.2em] text-sm">Falar com Consultora</span>
          </a>

          <button className="text-white border-b border-gold/50 hover:border-gold py-2 px-4 transition-all tracking-widest uppercase text-xs font-medium">
            Ver catálogo de móveis
          </button>
        </div>
        
        <p className="mt-10 text-gray-500 text-sm italic">
          *Atendimento personalizado para Fortaleza e Região Metropolitana.
        </p>
      </div>
    </section>
  );
}