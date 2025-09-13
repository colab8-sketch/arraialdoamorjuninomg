import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonsProps {
  whatsappNumber?: string;
  instagramHandle?: string;
  className?: string;
}

const ContactButtons = ({ 
  whatsappNumber = "5531975200162", 
  instagramHandle = "arraialdomoramorjunino",
  className = ""
}: ContactButtonsProps) => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre as apresentações do grupo de dança junina.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagramClick = () => {
    const url = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi34Z7mz9SPAxVhqZUCHb2UDfoQFnoECBwQAQ&url=https%3A%2F%2Fwww.instagram.com%2Farraialdoamorjunino%2F&usg=AOvVaw24WVOUrOh0wByyNSLIflnH&opi=89978449";
    window.open(url, '_blank');
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        onClick={handleWhatsAppClick}
        variant="whatsapp"
        size="lg"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </Button>
      
      <Button
        onClick={handleInstagramClick}
        variant="instagram"
        size="lg"
        className="flex items-center gap-2"
      >
        <Instagram className="h-5 w-5" />
        Instagram
      </Button>
    </div>
  );
};

export default ContactButtons;