"use client";

import { Award, Phone, Settings } from 'lucide-react';

const Banner = () => {
  return (
    <section 
      className="w-full bg-[#3685fb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12 py-4">
          {/* Tag 1 */}
          <div className="flex items-center">
            <div className="w-14 h-14 hover:bg-background/10 rounded-full flex items-center justify-center">
              <Award size={32} color="white" />
            </div>
            <span className="text-white font-semibold text-base">
              +10 anos de experiência real
            </span>
          </div>

          {/* Tag 2 */}
          <div className="flex items-center">
            <div className="w-14 h-14 hover:bg-background/10 rounded-full flex items-center justify-center">
              <Phone size={32} color="white" />
            </div>
            <span className="text-white font-semibold text-base">
              +3.500 modelos cadastrados
            </span>
          </div>

          {/* Tag 3 */}
          <div className="flex items-center">
            <div className="w-14 h-14 hover:bg-background/10 rounded-full flex items-center justify-center">
              <Settings size={32} color="white" />
            </div>
            <span className="text-white font-semibold text-base">
              Sistema feito sob medida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
