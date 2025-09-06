"use client";
import { AUTH_LINKS, SOCIAL_LINKS, WHATSAPP_LINKS } from "@/constants/links";
import { Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#d4f7e6] py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col max-w-7xl mx-auto gap-8">
        {/* Header with Logo */}
        <div className="flex justify-center">
          <img src="/assets/logo/logo-profile.svg" alt="Celus Logo" className="w-14 h-14" />
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-primary">
            Criado para quem vive a prática clínica.
          </h2>
          <p className="text-base text-tertiary max-w-[680px] mx-auto leading-relaxed">
            No Celus, acreditamos que decisões mais rápidas e seguras começam com acesso ao conteúdo certo. Por isso, desenvolvemos um app pensado por profissionais de saúde, para profissionais de saúde — com foco em agilidade, precisão e autonomia no ponto de atendimento.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a 
            href={SOCIAL_LINKS.FACEBOOK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a 
            href={WHATSAPP_LINKS.FOOTER} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>
          <a 
            href={SOCIAL_LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
          <a 
            href={SOCIAL_LINKS.YOUTUBE} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img src="/assets/icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
          </a>
        </div>

        {/* Footer Credits */}
        <div className="border-t border-[#35b48b] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-quaternary">
              © 2025 Celus. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a href="/politica" className="text-sm text-quaternary hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-sm text-quaternary hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="/cookies" className="text-sm text-quaternary hover:text-primary transition-colors">
                Preferências de Cookies
              </a>
            </div>

            <a
              href="https://spaceapps.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-quaternary hover:text-primary transition-colors"
            >
              Criado por Spaceapps
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
