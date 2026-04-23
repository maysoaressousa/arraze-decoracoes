import React from 'react';

// Importação de todos os componentes da pasta components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold selection:text-dark">
      
      {/* Navegação fixa no topo */}
      <Header />

      <main>
        {/* Banner principal com carrossel de imagens */}
        <Hero />

        {/* História, Missão, Visão e Valores */}
        <About />

        {/* Listagem dos serviços de decoração */}
        <Services />

        {/* Grid de fotos do portfólio */}
        <Gallery />

        {/* Depoimentos de clientes satisfeitos */}
        <Testimonials />
        
        {/* Chamada para ação final com foco em conversão */}
        <CTA />
      </main>

      {/* Rodapé com informações de contacto e redes sociais */}
      <Footer />

      {/* Botão de WhatsApp fixo para atendimento rápido */}
      <WhatsAppButton />

    </div>
  );
}

export default App;