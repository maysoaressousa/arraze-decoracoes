import { Globe, Share2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-serif font-bold text-gold mb-6">ARRAZE</h2>
          <p className="text-gray-400 max-w-sm mb-6 font-light">
            Especialistas em criar ambientes luxuosos e inesquecíveis para celebrações de alto padrão.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-gold/20 hover:bg-gold hover:text-dark transition-all rounded-full"><Globe size={20} /></a>
            <a href="#" className="p-2 border border-gold/20 hover:bg-gold hover:text-dark transition-all rounded-full"><Share2 size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-6">Contatos</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> (85) 99999-9999</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-gold" /> contato@arraze.com.br</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Fortaleza, CE - Parangaba</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-6">Links Úteis</h4>
          <ul className="space-y-4 text-gray-400 text-sm uppercase tracking-tighter">
            <li><a href="#inicio" className="hover:text-gold">Home</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre Nós</a></li>
            <li><a href="#servicos" className="hover:text-gold">Serviços</a></li>
            <li><a href="#galeria" className="hover:text-gold">Galeria</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500 tracking-widest">
        <p>© 2026 ARRAZE DECORAÇÕES. DESENVOLVIDO COM PAIXÃO.</p>
      </div>
    </footer>
  );
}