"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { STORE_LINKS } from "@/constants/links";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollDirection();

  const navigationItems = [
    { name: "Início", href: "#inicio" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 bg-white shadow-sm z-30 transition-transform duration-300 z-50 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center px-4 lg:px-[72px] py-4">
            {/* Logo */}
            <div className={`${isMobile ? 'h-8 w-[103px]' : 'h-12 w-[154px]'}`}>
              <a 
                href="#inicio"
                className="w-full h-full flex items-center"
              >
                <img 
                  src="/assets/logo/logo-header.svg" 
                  alt="Celus Logo" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="flex items-center space-x-8">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-quaternary hover:text-primary text-sm transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full"></div>
                  </a>
                ))}
              </nav>
            )}

            {/* Desktop CTA */}
            {!isMobile && (
              <Button
                variant="primary"
                size="md"
                className="w-[160px]"
              >
                <a
                  href={STORE_LINKS.APP_STORE}
                  className="w-full"
                >
                  Baixe agora
                </a>
              </Button>
            )}

            {/* Mobile Actions */}
            {isMobile && (
              <div className="flex items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-[120px]"
                >
                  <a
                    href={STORE_LINKS.APP_STORE}
                    className="w-full"
                  >
                    Baixar
                  </a>
                </Button>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="flex items-center justify-center w-8 h-8 text-quaternary"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40" />
          
          {/* Menu */}
          <div ref={menuRef} className="fixed top-[88px] left-0 right-0 mx-4 bg-white z-50 px-6 py-6 shadow-xl rounded-2xl border border-gray-100">
            <div className="flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-[103px]">
                  <a 
                    href="#inicio"
                    className="w-full h-full flex items-center"
                  >
                    <img 
                      src="/assets/logo/logo-header.svg" 
                      alt="Celus Logo" 
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 text-quaternary hover:text-primary transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#f8fffe] hover:bg-[#edfcf6] text-quaternary hover:text-primary font-medium transition-colors duration-200"
                  >
                    {item.name}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </nav>

              {/* Mobile CTA Section */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button
                  variant="primary"
                  size="xl"
                  className="w-full"
                >
                  <a
                    href={STORE_LINKS.APP_STORE}
                    className="w-full"

                  >
                      Baixe agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
