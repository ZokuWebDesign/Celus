import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logos/logo-footer.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import X from "@/assets/icons/X.svg";
import { Legend } from "recharts";
import { LEGAL_LINKS, SOCIAL_LINKS, WHATSAPP_LINKS } from "@/constants/links";
{/*
import youtube from "@/assets/icons/youtube.svg";
import linkedIn from "@/assets/icons/linkedin.svg";
*/}

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 w-full">
            {/* Company Info */}
            <div className="space-y-6 w-full md:max-w-[400px] lg:max-w-full">
              <div className="max-w-[92px] flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="flex items-center">
                  <p>Endereço:</p>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="w-5 h-5" />
                  <a href={SOCIAL_LINKS.LOCAL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <p className="text-secondary">Sorocaba-SP.</p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="flex items-center">
                  <p>Contato:</p>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Phone className="w-5 h-5" />
                  <a href={WHATSAPP_LINKS.RH.CONTACT} target="_blank" rel="noopener noreferrer" className="hover:underline"><p className="text-secondary">+55 15 99694-5695</p></a>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Mail className="w-5 h-5" />
                  <a href={SOCIAL_LINKS.MAIL} target="_blank" rel="noopener noreferrer" className="hover:underline"><p className="text-secondary">suporte@sydapp.com.br</p></a>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.FACEBOOK} className="hover:opacity-80 transition-opacity">
                  <img src={facebook} alt="Facebook" className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src={instagram} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.TIKTOK} className="hover:opacity-80 transition-opacity">
                  <img src={tiktok} alt="TikTok" className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.X} className="hover:opacity-80 transition-opacity">
                  <img src={X} alt="X (Twitter)" className="w-5 h-5" />
                </a>
                {/*
                <a href={SOCIAL_LINKS.LINKEDIN} className="hover:opacity-80 transition-opacity">
                  <img src={linkedIn} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.YOUTUBE} className="hover:opacity-80 transition-opacity">
                  <img src={youtube} alt="YouTube" className="w-5 h-5" />
                </a>
                */}
              </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 md:flex gap-6 md:gap-12 w-full max-w-[368px]">
              {/* Services */}
              <div className="w-full max-w-40">
                <h6 className="text-lg font-semibold text-hsl(var--black) pb-6">Links rápidos</h6>
                <ul className="text-secondary">
                  <li><a href="#inicio" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Início</a></li>
                  <li><a href="#como-funciona" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Como funciona</a></li>
                  <li><a href="#beneficios" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Benefícios</a></li>
                  <li><a href="#contato" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Contato</a></li>
                  <li><a href="#faq" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="w-full max-w-40">
                <h6 className="text-lg font-semibold text-[hsl(var(--black))] pb-6">Relacionado</h6>
                <ul className="text-secondary">
                  <li><a href="/" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Para pacientes</a></li>
                  <li><a href="/profissional" className="block py-2 hover:underline hover:text-secondary/90 transition-colors">Para profissionais</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary py-3 text-[hsl(var(--black))] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © 2025 SYD. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-0">
              <a href={LEGAL_LINKS.PRIVACY_POLICY} className="hover:underline transition-colors p-3">Política de Privacidade</a>
              <a href={LEGAL_LINKS.TERMS_OF_USE} className="hover:underline transition-colors p-3">Termos de Uso</a>
              <a href={LEGAL_LINKS.COOKIES_POLICY} className="hover:underline transition-colors p-3">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
