import React from 'react';
import backdropImage from './images/backdrop.jpg'; 
import loopingBack from './images/loopingback.mp4';
import footerImage from './images/footer.jpg';

const WebinarLanding = () => {
  return (
      <div className="relative w-full min-h-screen bg-[#050014] font-sans text-gray-900 block overflow-y-auto">
        
        {/* 1. HERO SECTION WITH EDGE-TO-EDGE BACKDROP */}
        <header 
          className="relative w-full min-h-screen md:min-h-[95vh] flex flex-col justify-end items-center px-6 md:px-10 pb-16 pt-20 md:pt-24 overflow-hidden bg-[#050014]"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={loopingBack}
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            className="absolute inset-x-0 bottom-0 mx-auto w-full h-full object-contain object-bottom pointer-events-none z-10"
            src={backdropImage}
            alt="Webinar hero backdrop"
            style={{ opacity: 0.95 }}
          />
        </header>

        {/* 2. REGISTRATION ACTION SECTION */}
        <section className="relative w-full bg-[#ffffff] py-12 px-6 flex flex-col items-center justify-center border-t border-gray-800">
          <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
            

            
            {/* Unified Redirect Button Link */}
            <a 
              href="https://marketbeat.my.canva.site/registration/#page-0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-md transition-all transform hover:scale-105 uppercase tracking-widest text-sm md:text-base text-center shadow-2xl block border border-blue-400/20"
            >
              Register Now
            </a>


          </div>
        </section>



        {/* ========================================== */}
      {/* FIXED FOOTER SECTION - PRESERVES ALL DETAILS */}
      {/* ========================================== */}
        <footer className="relative w-full bg-white border-t border-gray-200">
        <div className="w-full mx-auto relative">
          
          {/* Fluid image element ensuring zero cropping */}
          <img 
            src={footerImage} 
            alt="MarketBeat Footer Information" 
            className="w-full h-auto block object-contain"
          />

          {/* OPTIONAL: Absolute hot-spots for the Facebook and LinkedIn links */}
          {/* You can adjust the left percentages below to match your image exactly if needed */}
          <div className="absolute bottom-[8%] left-[29%] w-[6%] h-[15%]">
            <a 
              href="https://www.facebook.com/share/1EWkjeo3JV/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full h-full cursor-pointer"
              title="Facebook"
            ></a>
          </div>
          
          <div className="absolute bottom-[8%] left-[36%] w-[6%] h-[15%]">
            <a 
              href="https://www.linkedin.com/in/themarketbeat/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full h-full cursor-pointer"
              title="LinkedIn"
            ></a>
          </div>

        </div>
      </footer>



    </div>
  );
};

export default WebinarLanding;
