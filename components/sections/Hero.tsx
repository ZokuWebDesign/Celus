"use client";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="bg-white relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-[72px]">
        <div className="flex flex-col lg:flex-row items-center min-h-[641px] py-16 lg:py-0">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-[504px] text-left lg:pr-8">
            {/* Title */}
            <h1 className="text-[#108b6a] text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Acelere sua tomada de decisão
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#101828] text-lg lg:text-2xl leading-relaxed mb-8">
              Celus, o app de ultrassonografia point-of-care feito para quem precisa de respostas clínicas rápidas, precisas e no seu bolso.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xxl">
                Baixar agora
              </Button>
              <Button 
                variant="outline"
                size="xxl"
              >
                Ver funcionalidades
              </Button>
            </div>
          </div>

          {/* Right Medical Imagery */}
          <div className="flex-1 relative mt-12 lg:mt-0">
            {/* Background Medical Image */}
            <div className="relative">
              {/* Medical Background */}
              <div className="w-full h-[400px] lg:h-[600px] bg-gradient-to-br from-[#edfcf6] to-[#d4f7e6] rounded-2xl overflow-hidden relative">
                {/* Ultrasound Screen Mockup */}
                <div className="absolute top-8 left-8 right-8 bottom-8 bg-black rounded-xl flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Ultrasound Interface Elements */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between text-green-400 text-xs font-mono">
                      <span>CELUS v2.0</span>
                      <span>15:42:33</span>
                    </div>
                    
                    {/* Central Ultrasound Image Area */}
                    <div className="w-3/4 h-3/4 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded border border-green-400/30 relative">
                      {/* Simulated ultrasound pattern */}
                      <div className="absolute inset-0 opacity-60">
                        <div className="w-full h-full bg-gradient-radial from-green-400/20 via-transparent to-transparent"></div>
                        {/* Grid lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,0.1)_25%,rgba(34,197,94,0.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.1)_75%,rgba(34,197,94,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,197,94,0.1)_25%,rgba(34,197,94,0.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.1)_75%,rgba(34,197,94,0.1)_76%,transparent_77%,transparent)] bg-[20px_20px]"></div>
                      </div>
                    </div>
                    
                    {/* Bottom Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                      <div className="text-green-400 text-xs font-mono">
                        DEPTH: 6.0cm | FREQ: 5.0MHz
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Medical Icons */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#35b48b] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                
                <div className="absolute bottom-16 right-12 w-8 h-8 bg-[#108b6a] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                
                <div className="absolute top-1/2 right-4 w-6 h-6 bg-[#35b48b]/60 rounded-lg"></div>
              </div>

              {/* Celus Logo Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                  <div className="w-8 h-8 bg-[#35b48b] rounded-lg flex items-center justify-center mr-3">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xl font-bold text-[#108b6a]">Celus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
