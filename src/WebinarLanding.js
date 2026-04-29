import React from 'react';
import heroBackground from './images/hero-bg.jpg'; 
import tarekPhoto from './images/tarek.jpg'; 
import janettePhoto from './images/janette.jpg'; 
import reyPhoto from './images/rey.jpg'; 
import globalImg from './images/global.jpg'; 
import localImg from './images/local.jpg'; 
import panelImg from './images/panel.jpg'; 
import aboutBg from './images/aboutevent.jpg';
import speakerSectionBg from './images/speaker.jpg'; 
import footerLogoHero from './images/marketbeat.jpg'; 
import footerAiHero from './images/ai.jpg'; 

const WebinarLanding = () => {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans text-gray-900 block overflow-y-auto">
      
      {/* 1. HERO SECTION */}
      <header 
        className="relative h-screen text-white p-10 md:p-20 flex flex-col justify-between overflow-hidden bg-[#000033]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 51, 1) 40%, rgba(0, 0, 51, 0) 90%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic text-left">MARKET<span className="text-blue-500">BEAT</span></h3>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 py-10 text-left">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[1.2] tracking-tight text-white">
            AI in Global Marketing:<br />
            Innovation, Workforce,<br />
            & Ethics
          </h1>

          <div className="flex flex-wrap gap-4 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-12 opacity-80 border-b border-blue-500/30 pb-4">
            <span>AI and Workforce Evolution</span>
            <span className="text-blue-500">|</span>
            <span>Data-Driven Advantage</span>
            <span className="text-blue-500">|</span>
            <span>Ethical AI Practices</span>
          </div>

          <div className="border-l-8 border-blue-600 pl-8">
            <p className="text-xl md:text-2xl font-bold uppercase tracking-wide text-blue-100 text-left">SPEAKERS: TAREK KASSAR | JANETTE TORAL | DR. REY FREMISTA</p>
            <p className="text-lg md:text-xl opacity-90 mt-2 font-medium uppercase text-left text-white">Webinar Date • June 7, 2026 1:00 PM (PHT)</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 mt-10 mb-20">
          <div className="mb-6">
            <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-widest text-white opacity-90 text-left">
              Register Now <span className="text-blue-500 animate-pulse ml-2 text-3xl">▼</span>
            </h4>
          </div>

 <div className="flex flex-col sm:flex-row gap-8">
            {/* BUTTON 1 - PUP STUDENT */}
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScQ_PtsVXD6vaYdZNxcDYHsONMldE4IJdAcpepxyodu005xCg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black py-6 px-12 rounded-sm transition-all transform hover:scale-105 uppercase tracking-widest text-sm text-center shadow-2xl block"
            >
                I AM A PUP OUS MBA/DBA STUDENT
            </a>

            {/* BUTTON 2 - NON-PUP STUDENT */}
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXivsxt9WXZzW9BRy_ROwHdlvQsNSyE7u9psEQa0oipHHO3w/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-black py-6 px-12 rounded-sm transition-all transform hover:scale-105 uppercase tracking-widest text-sm text-center shadow-2xl block"
            >
                I AM <span className="italic text-pink-300 px-1 font-bold">NOT</span> A PUP OUS STUDENT
            </a>
</div>
        </div>
      </header>

      {/* 2. KEYNOTE SPEAKER - TAREK (RESTORED BODY) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] bg-white border-t">
        <div className="p-10 md:p-24 flex flex-col justify-center relative text-left">
          <h2 className="text-6xl md:text-8xl font-black text-[#7D5FFF] uppercase leading-[0.9] mb-12 tracking-tighter">Keynote<br />Speaker</h2>
          <div className="max-w-md">
            <p className="text-[1.2rem] leading-relaxed text-gray-800 font-light">
              <span className="font-bold text-gray-900">Tarek Kassar</span> is the Director of Operations at React, bringing over 20 years of experience as a strategic marketing and communications leader. Formerly Group Head of Marketing at Al Barakah Investment Holding, Kassar specializes in brand building, global marketing strategies, and driving innovative business and workforce growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 h-[750px] md:h-auto min-h-[850px]">
          <div className="bg-[#7D5FFF]"></div>
          <div className="bg-white p-12 flex items-center justify-center border-b border-gray-100 text-center text-[#7D5FFF] font-bold text-3xl md:text-4xl leading-tight uppercase">Ai Innovation in<br/>Multinational<br/>Marketing</div>
          <div className="relative overflow-hidden group border-t border-gray-100"><div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: `url(${tarekPhoto})` }}></div></div>
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Tarek Kassar</div>
        </div>
      </section>

      {/* 3. GUEST SPEAKER - JANETTE (RESTORED BODY) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] bg-white border-t">
        <div className="grid grid-cols-2 h-[750px] md:h-auto min-h-[850px]">
          <div className="bg-[#3B82F6]"></div>
          <div className="bg-[#F3F4F6] p-12 flex items-center justify-center border-b border-gray-200 text-center text-[#3B82F6] font-bold text-2xl md:text-3xl leading-tight uppercase">AI and Workforce TRANSFORMATION
IN PHILIPPINE
MARKETING<br/>Transformation</div>
          <div className="relative overflow-hidden group border-t border-gray-100"><div className="w-full h-full bg-cover grayscale bg-top" style={{ backgroundImage: `url(${janettePhoto})` }}></div></div>
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Janette Toral,
E-COMMERCE,
AI & DIGITAL
ECONOMY
ADVISOR</div>
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
recently authored the new book titled,
Smarter with AI.  <span className="italic">Smarter with AI.</span>
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
          <div className="bg-[#1E1B4B] text-white p-12 flex items-center justify-center text-center uppercase tracking-[0.18em] leading-[1.7] font-light text-2xl">Dr. Rey Fremista <br/> FOUNDER &
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
                <p>This webinar is organized by <span className="font-bold text-blue-300 uppercase">MarketBeat</span> as part of the course requirements for <strong>MBA 611 (Global Trends in Marketing)</strong></p>
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

      {/* 8. FOOTER - 100% FAIL-PROOF SVG ICONS */}
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          <div className="bg-[#0f172a] w-full md:w-[40%] flex items-center justify-center p-12">
            <img src={footerLogoHero} alt="Branding" className="max-w-full max-h-[350px] object-contain" />
          </div>
          <div className="relative w-full md:w-[60%] h-[300px] md:h-full overflow-hidden">
            <img src={footerAiHero} alt="AI" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-[#FF49DB] text-white px-10 py-6 md:pr-32">
               <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">Contact Information</h3>
            </div>
          </div>
        </div>

        <div className="py-20 px-10 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-16">
              
              {/* FACEBOOK SVG */}
              <a href="https://www.facebook.com/share/1EWkjeo3JV/" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LINKEDIN SVG */}
              <a href="https://www.linkedin.com/in/themarketbeat/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
                <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

            </div>
            
            <button className="bg-[#4285F4] hover:bg-blue-600 text-white font-black text-3xl px-20 py-8 shadow-xl uppercase tracking-tight transition-all">
              Register Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebinarLanding;
