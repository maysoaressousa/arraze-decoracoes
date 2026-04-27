import React, { useState } from 'react';
/* Trocamos Instagram por Camera e MessageCircle por Mail para testar a estabilidade */
import { Menu, X, Camera, Mail, Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full z-50 bg-dark/95 border-b border-gold/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl font-serif font-bold text-gold tracking-tighter">
          ARRAZE
        </h1>
        
        <nav className="hidden lg:flex space-x-8 text-white uppercase text-[10px] tracking-[0.2em] font-medium">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gold transition-colors">{item.name}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4 border-r border-gold/30 pr-6 text-white">
            {/* Usando Camera no lugar de Instagram para ver se o erro some */}
            <a href="#" className="hover:text-gold transition-all"><Camera size={18} /></a>
            <a href="#" className="hover:text-gold transition-all"><Globe size={18} /></a>
          </div>
          
          <button className="bg-gold hover:bg-gold-dark text-dark font-bold py-2 px-6 rounded-sm text-[10px] tracking-widest transition-all shadow-lg shadow-gold/10">
            ORÇAMENTO
          </button>
        </div>

        <div className="md:hidden text-gold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gold/10 p-8 flex flex-col space-y-6 text-center">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white text-lg tracking-widest" onClick={() => setIsOpen(false)}>{item.name}</a>
          ))}
          <div className="flex justify-center space-x-8 pt-8 border-t border-gold/10">
            <Camera className="text-gold" size={24} />
            <Mail className="text-gold" size={24} />
          </div>
        </div>
      )}
    </header>
  );
}