import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import backdropImage from './images/backdrop.jpg'; 
import tarekPhoto from './images/tarek.jpg'; 
import janettePhoto from './images/janette.jpg'; 
import reyPhoto from './images/rey.jpg'; 
import globalImg from './images/global.jpg'; 
import localImg from './images/local.jpg'; 
import panelImg from './images/panel.jpg'; 
import aboutBg from './images/aboutevent.jpg';
import speakerSectionBg from './images/speaker.jpg'; 
import footerImage from './images/footer.jpg';

const WebinarLanding = () => {
  return (
      <div className="relative w-full min-h-screen bg-[#050014] font-sans text-gray-900 block overflow-y-auto">
        
        {/* 1. HERO SECTION WITH EDGE-TO-EDGE BACKDROP */}
        <header 
          className="relative w-full min-h-[85vh] flex flex-col justify-end items-center px-6 md:px-10 pb-16 pt-32"
          style={{
            backgroundImage: `url(${backdropImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay gradient to ensure smooth transition to sections below if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-transparent to-transparent opacity-60 z-0 pointer-events-none" />

         
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

               {/* QR Code Container Block */}
          <div className="flex flex-col items-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500">
              Or scan to register via mobile
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-inner">
              <QRCodeSVG 
                value="https://marketbeat.my.canva.site/registration/#page-0"
                size={160}
                bgColor={"#ffffff"}
                fgColor={"#050014"}
                level={"M"}
                includeMargin={false}
              />
            </div>
            
            <span className="text-[11px] text-gray-400 font-mono select-all">
              marketbeat.my.canva.site
            </span>
          </div>

          </div>
        </section>




      {/* 2. KEYNOTE SPEAKER - TAREK (RESTORED BODY) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] bg-white border-t">
        <div className="p-10 md:p-24 flex flex-col justify-center relative text-left">
          <h2 className="text-6xl md:text-8xl font-black text-[#7D5FFF] uppercase leading-[0.9] mb-12 tracking-tighter">Keynote<br />Speaker</h2>
          <div className="max-w-md">
            <p className="text-[1.2rem] leading-relaxed text-gray-800 font-light">
              <span className="font-bold text-gray-900">Tarek Kassar </span> is the Director of Operations at React, bringing over 20 years of experience as a strategic marketing and communications leader. Formerly Group Head of Marketing at Al Barakah Investment Holding, Kassar specializes in brand building, global marketing strategies, and driving innovative business and workforce growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 h-[750px] md:h-auto min-h-[850px]">
          <div className="bg-[#7D5FFF]"></div>
          <div className="bg-white p-12 flex items-center justify-center border-b border-gray-100 text-center text-[#7D5FFF] font-bold text-3xl md:text-4xl leading-tight uppercase">Ai Innovation in<br/>Multinational<br/>Marketing</div>
          <div className="relative overflow-hidden group border-t border-gray-100"><div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: `url(${tarekPhoto})` }}></div></div>
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Tarek Kassar <br/> <br/> STRATEGY AND PERFORMANCE-DRIVEN GROWTH LEADER
  </div>
        </div>
      </section>

      {/* 3. GUEST SPEAKER - JANETTE (RESTORED BODY) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] bg-white border-t">
        <div className="grid grid-cols-2 h-[750px] md:h-auto min-h-[850px]">
          <div className="bg-[#3B82F6]"></div>
          <div className="bg-[#F3F4F6] p-12 flex items-center justify-center border-b border-gray-200 text-center text-[#3B82F6] font-bold text-2xl md:text-3xl leading-tight uppercase">AI and Workforce TRANSFORMATIONIN PHILIPPINE
MARKETING<br/>Transformation</div>
          <div className="relative overflow-hidden group border-t border-gray-100"><div className="w-full h-full bg-cover grayscale bg-top" style={{ backgroundImage: `url(${janettePhoto})` }}></div></div>
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Janette Toral,<br/> <br/> MOTHER OF E-COMMERCE LAW IN THE PHILIPPINES,AI AND DIGITAL ECONOMY ADVISOR
        </div>
        </div>
        <div className="p-10 md:p-24 flex flex-col justify-center items-center text-center relative text-gray-800">
          <h2 className="text-6xl md:text-8xl font-black text-[#3B82F6] uppercase leading-[0.9] mb-12 tracking-tighter">Guest<br />Speaker</h2>
          <div className="max-w-md mx-auto">
            <p className="text-[1.2rem] leading-relaxed font-light text-center">
              <span className="font-bold text-gray-900">Janette Toral</span>  is a digital economy leader
specializing in artificial intelligence and
electronic commerce. As a Director at
iMetrics Asia Pacific and an executive
coach, she helps teams navigate emerging
technologies, platform shifts, and
regulatory change. A key architect of the
Philippine national digital policy, she
recently authored the book
<span className="italic"> Smarter with AI.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. PANELLIST - DR. REY (RESTORED BODY) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] bg-white border-t">
        <div className="p-10 md:p-24 flex flex-col justify-center relative text-left">
          <h2 className="text-6xl md:text-8xl font-black text-[#7D5FFF] uppercase leading-[0.9] mb-12 tracking-tighter">Panellist</h2>
          <div className="max-w-lg">
            <p className="text-[1.2rem] leading-relaxed text-gray-800 font-light">
              <span className="font-bold text-gray-900">Dr. Rey Fremista</span>  is a distinguished
executive, global thought leader, and
educator in quality, operational
excellence, innovation, and leadership,
with almost two decades of industry
experience, more than a decade of
academic practice, and over ten years
of board-level and governance
leadership in national and international
non-profit organizations.

            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 h-[750px] md:h-auto min-h-[850px]">
          <div className="bg-[#7D5FFF]"></div>
          <div className="bg-[#F3F4F6] p-12 flex items-center justify-center border-b border-gray-200 text-center text-[#7D5FFF] font-bold text-2xl md:text-3xl leading-tight uppercase">Panel Discussion:<br/>Ethical Ai IN MARKETING</div>
          <div className="relative overflow-hidden group border-t border-gray-100"><div className="w-full h-full bg-cover grayscale bg-top" style={{ backgroundImage: `url(${reyPhoto})` }}></div></div>
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Dr. Rey Fremista <br/><br/> FOUNDER AND
CHIEF
CONSULTANT,
MINDGRIT
</div>
        </div>
      </section>

      {/* 5. ABOUT THE EVENT */}
      <section 
        className="relative min-h-[900px] py-32 px-10 md:px-20 flex items-center justify-center overflow-hidden border-t"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 51, 0.4), rgba(46, 16, 101, 0.4)), url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10 w-full text-white text-left">
          <div className="md:w-1/3">
            <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">About<br />The Event</h2>
          </div>
          <div className="md:w-2/3 bg-blue-900/30 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg shadow-2xl">
            <div className="space-y-8 text-[1.1rem]">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">In a world driven by AI and global trends, one thing matters: staying on beat.</p>
              <div className="space-y-6 leading-relaxed opacity-95">
                <p>This webinar is organized by <span className="font-bold text-blue-300 uppercase">MarketBeat</span> as part of the course requirements for <strong>MBA 611 (Global Trends and Issues in Marketing Management)</strong></p>
                <p>MarketBeat explores the latest developments
                    shaping the marketing profession globally, including
                    artificial Intelligence (AI) that is rapidly transforming
                    how companies understand consumers, design
                    campaigns, and make strategic decisions.</p>

                <p>AI also raises important questions about
                        employment, skills, and ethical responsibility in
                        marketing practice.
              </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPEAKER LINE-UP */}
      <section className="relative min-h-[900px] py-32 px-10 flex flex-col justify-center items-center overflow-hidden border-t"
        style={{ backgroundImage: `url(${speakerSectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="max-w-6xl w-full relative z-10 flex justify-end">
          <div className="bg-white/85 backdrop-blur-md p-10 md:p-20 w-full md:w-[60%] shadow-2xl border border-white/20">
            <h2 className="text-5xl md:text-7xl font-black text-[#FF49DB] uppercase tracking-tighter mb-16 text-center whitespace-nowrap">Speaker Line-up</h2>
            <div className="space-y-12">
              <div className="text-left"><p className="text-blue-600 font-black uppercase tracking-widest text-lg leading-tight">AI Innovation in Multinational Marketing</p><p className="text-gray-900 font-bold text-xl mt-4">TAREK KASSAR</p></div>
              <div className="text-left border-t border-gray-200 pt-10"><p className="text-blue-600 font-black uppercase tracking-widest text-lg leading-tight">AI and Workforce Transformation IN PHILIPPINE MARKETING</p><p className="text-gray-900 font-bold text-xl mt-4">JANETTE TORAL</p></div>
              <div className="text-left border-t border-gray-200 pt-10"><p className="text-blue-600 font-black uppercase tracking-widest text-lg leading-tight">Panel Discussion: Ethical AI IN
MARKETING - RESPONSIBLE USE OF AI
IN CONTENT CREATION AND CONSUMER
DATA MANAGEMENT</p><p className="text-gray-900 font-bold text-xl mt-4">DR. REY FREMISTA</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROGRAM SECTION */}
      <section className="min-h-[900px] py-32 bg-white px-10 flex flex-col justify-center border-t">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h2 className="text-6xl md:text-8xl font-black text-[#FF49DB] uppercase tracking-tighter mb-10">Program</h2>
          <h2 className="text-2xl md:text-2xl font-black tracking-tighter mb-10">The webinar offers talks on AI and the future of marketing: innovation, workforce transformation, and ethical responsibility.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="shadow-2xl rounded-sm overflow-hidden h-full"><img src={globalImg} alt="Global" className="w-full h-full object-cover" /></div>
            <div className="shadow-2xl rounded-sm overflow-hidden h-full"><img src={localImg} alt="Local" className="w-full h-full object-cover" /></div>
            <div className="shadow-2xl rounded-sm overflow-hidden h-full"><img src={panelImg} alt="Panel" className="w-full h-full object-cover" /></div>
          </div>
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
