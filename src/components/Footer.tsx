import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-footer-white-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-start mb-6">
              <img src={logo} alt="Logo Programa de Enfrentamento ao Câncer" className="h-20 md:h-24 w-auto" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre o Programa
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Conteúdo
                </Link>
              </li>
              <li>
                <Link to="/espaco" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Espaço
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">SHIS QI 21 Conjunto 1, Casa 02 - Lago Sul, Brasília - DF, CEP: 71655-210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">(61) 98164-6661</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Programa de Enfrentamento ao Câncer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
