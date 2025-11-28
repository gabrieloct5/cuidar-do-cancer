import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number when available
    const phoneNumber = "5561999999999"; // Format: country code + area code + number
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Programa de Enfrentamento ao Câncer.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-40 rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#1fb855] text-white"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
