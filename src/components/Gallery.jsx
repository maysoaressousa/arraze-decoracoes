import React from 'react';

import img1 from '../assets/SAVE_20260423_091032.jpg';
import img2 from '../assets/SAVE_20260423_091038.jpg';
import img3 from '../assets/SAVE_20260423_091042.jpg';
import img4 from '../assets/SAVE_20260423_091048.jpg';
import img5 from '../assets/SAVE_20260423_091053.jpg';
import img6 from '../assets/SAVE_20260423_091100.jpg';
import img7 from '../assets/SAVE_20260423_091108.jpg';

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-dark mb-4">Galeria de Inspirações</h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">Nossos Projetos Recentes</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden h-80">
              <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Decoração Arraze" />
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-[1px] bg-gold mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500"></div>
                <h3 className="text-gold font-serif text-xl mb-2">Evento Exclusive</h3>
                <p className="text-white text-xs uppercase tracking-widest font-light">Ver Detalhes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}