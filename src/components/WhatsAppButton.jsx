import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585981615341?text=Olá!%20Vi%20o%20site%20da%20Arraze%20e%20gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Enviar mensagem no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
