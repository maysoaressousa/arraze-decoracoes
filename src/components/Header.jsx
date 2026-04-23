import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
        <h1 className="text-3xl font-serif font-bold text-gold tracking-tighter">ARRAZE</h1>
        
        <nav className="hidden md:flex space-x-8 text-white uppercase text-xs tracking-[0.2em] font-medium">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gold transition-colors">{item.name}</a>
          ))}
        </nav>

        <button className="hidden md:block bg-gold hover:bg-gold-dark text-dark font-bold py-2 px-6 rounded-sm transition-all duration-300">
          ORÇAMENTO
        </button>

        <div className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gold/10 p-6 flex flex-col space-y-4 text-center animate-fade-in">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white text-lg py-2" onClick={() => setIsOpen(false)}>{item.name}</a>
          ))}
        </div>
      )}
    </header>
  );
}