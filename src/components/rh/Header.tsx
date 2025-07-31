import { useState } from "react";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/logo-full.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm border-b border-primary sticky top-0 z-50 font-[var(--heading)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-[hsl(var(--black))] font-medium">
            <a href="#inicio" className="hover:text-secondary transition-colors p-3">Início</a>
            <a href="#como-funciona" className="hover:text-secondary transition-colors p-3">Como funciona</a>
            <a href="#beneficios" className="hover:text-secondary transition-colors p-3">Benefícios</a>
            <a href="#contato" className="hover:text-secondary transition-colors p-3">Contato</a>
            <a href="#faq" className="hover:text-secondary transition-colors p-3">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/*
            <Button variant="outline" className="rounded-2xl px-4 py-3 text-secondary border-secondary hover:bg-secondary hover:text-white text-xl h-auto">
              Entrar
            </Button>
            */}
            <Button className="rounded-2xl w-[256px] p-0 border border-white bg-secondary hover:bg-secondary/90 h-auto">
              <a
                href={WHATSAPP_LINKS.RH.PITCH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-5 gap-1.5 text-lg text-white font-semibold"
              >
                <Calendar className="w-5 h-5"/>
                <span className="pl-0.5 pr-0.5">Agendar apresentação</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6"
            >
              {isMenuOpen ? <X className="text-gray-500"/> : <Menu className="text-secondary"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 text-[hsl(var(--black))] font-medium">
            <div className="flex flex-col">
              <a href="#inicio" className="py-2 px-2">Início</a>
              <a href="#como-funciona" className="py-2 px-2">Como funciona</a>
              <a href="#beneficios" className="py-2 px-2">Benefícios</a>
              <a href="#contato" className="py-2 px-2">Contato</a>
              <a href="#faq" className="py-2 px-2">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                {/*
                <Button variant="outline" className="py-3 text-secondary border-secondary hover:bg-secondary hover:text-white h-auto">
                  Entrar
                </Button>
                */}
                <Button className="py-3 gap-1.5 border border-white bg-secondary hover:bg-secondary/90 text-white font-semibold h-auto">
                  <a 
                    href={WHATSAPP_LINKS.RH.PITCH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center "
                  >
                    <Calendar className="w-4 h-4"/>
                    <span className="pl-0.5 pr-0.5">Agendar apresentação</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
