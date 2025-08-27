"use client";
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
          <h2 className="text-lg font-bold text-[#108b6a]">
            Criado para quem vive a prática clínica.
          </h2>
          <p className="text-base text-[#101828] max-w-[680px] mx-auto leading-relaxed">
            No Celus, acreditamos que decisões mais rápidas e seguras começam com acesso ao conteúdo certo. Por isso, desenvolvemos um app pensado por profissionais de saúde, para profissionais de saúde — com foco em agilidade, precisão e autonomia no ponto de atendimento.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
          <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
          <img src="/assets/icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
        </div>

        {/* Footer Credits */}
        <div className="border-t border-[#35b48b] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#475467]">
              © 2025 Celus. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a href="/politica" className="text-sm text-[#475467] hover:text-[#108b6a] transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-sm text-[#475467] hover:text-[#108b6a] transition-colors">
                Termos de Uso
              </a>
              <a href="/cookies" className="text-sm text-[#475467] hover:text-[#108b6a] transition-colors">
                Preferências de Cookies
              </a>
            </div>

            <a
              href="https://spaceapps.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#475467] hover:text-[#108b6a] transition-colors"
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
