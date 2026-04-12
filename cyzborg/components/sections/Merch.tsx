import React, { useState } from 'react';
import Button from '../ui/Button';
import { X } from 'lucide-react';

const Merch: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [showTrademarkMsg, setShowTrademarkMsg] = useState(false);

  return (
    <section id="merch" className="relative w-full bg-cyzborg-black py-12 md:py-20 overflow-hidden border-t border-neutral-900">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block border border-cyzborg-blue/30 bg-cyzborg-blue/10 px-4 py-1.5 rounded-full mb-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-cyzborg-blue font-bold">
                Gear Drop 01
              </span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white mb-6 leading-[0.9]">
              The OG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Founder's Tee
              </span>
            </h2>
            
            <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-xl mb-10">
              Rep the movement from day one. The iconic CYZBORG mark. Limited run for the early adopters.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto">
              <Button 
                variant="primary" 
                className="!px-10 !py-4 text-sm w-full sm:w-auto"
                onClick={() => setShowTrademarkMsg(true)}
              >
                Coming later 2026
              </Button>
              {showTrademarkMsg && (
                <p className="text-cyzborg-orange font-mono text-xs md:text-sm tracking-widest uppercase animate-fade-in mt-2">
                  I know! We're waiting on our Trademark to Register.
                </p>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Shirt Image */}
            <img 
              src="https://helmet-with-logo.netlify.app/cyzborg-og-shirt.png?v=3" 
              alt="CYZBORG OG Shirt" 
              onClick={() => setIsImageOpen(true)}
              className="relative z-10 w-full max-w-[400px] lg:max-w-[100%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
            />
          </div>

        </div>
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsImageOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src="https://helmet-with-logo.netlify.app/cyzborg-og-shirt.png?v=3" 
            alt="CYZBORG OG Shirt Full Size" 
            className="w-full max-w-4xl max-h-[90vh] object-contain animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Merch;
