import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
// Importe os outros conforme for criando...

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Services />
      {/* Adicione as outras seções aqui */}
      <WhatsAppButton />
      
      {/* Exemplo de Footer Simples */}
      <footer id="contato" className="bg-dark text-white py-12 border-t border-gold/20 text-center">
        <p className="text-gold font-serif text-2xl mb-4">ARRAZE</p>
        <p className="text-gray-500 text-sm">© 2026 Arraze Decorações. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;