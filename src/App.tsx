/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  Zap, 
  Brain, 
  ChevronRight, 
  Menu, 
  X, 
  Shield, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'The Problem', href: '#problem' },
    { name: 'Drills', href: '#services' },
    { name: 'Elite Camps', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center font-black text-brand-yellow border border-brand-yellow italic overflow-hidden">
              W
            </div>
            <div className="text-xl font-black italic tracking-tighter uppercase leading-none">
              Wall’s <span className="text-brand-blue">GK</span> Academy
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${idx === 0 ? 'text-brand-yellow' : 'text-slate-400 hover:text-brand-blue'} px-1 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-2.5 text-xs font-black uppercase italic tracking-widest transition-all"
              >
                BOOK NOW
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-dark border-b border-brand-border"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-brand-yellow block text-sm font-black uppercase italic tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-20 border-b border-brand-border">
      <div className="flex-1 grid lg:grid-cols-12 w-full max-w-screen-2xl mx-auto">
        {/* Left Content */}
        <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center lg:border-r border-brand-border relative overflow-hidden">
          <div className="bg-circuit absolute inset-0 opacity-20" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-block px-3 py-1 bg-brand-blue text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">
              Handball Specialization
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase italic tracking-tighter mb-8">
              Where the <span className="text-brand-blue text-glow-blue">Wall</span><br/>Begins.
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-medium">
              Specific drills and high-level immersion designed to turn your instincts into game-winning saves.
            </p>
            <button className="bg-brand-yellow text-brand-dark font-black px-10 py-5 uppercase italic tracking-tighter text-2xl hover:bg-brand-yellow-light transform transition-all active:scale-95">
              Book Your Session
            </button>
          </motion.div>
        </div>

        {/* Right Content/Problem */}
        <div id="problem" className="lg:col-span-5 flex flex-col justify-center bg-brand-slate/30 p-10 md:p-16 border-t lg:border-t-0 border-brand-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-brand-yellow uppercase font-black text-sm tracking-widest mb-6 italic">// The Problem</h2>
            <p className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-tight">
              Most team practices treat goalkeepers as <span className="text-brand-blue underline decoration-4 underline-offset-8 italic">targets</span>, not athletes.
            </p>
            <p className="mt-8 text-lg text-slate-400">
              You deserve coaching as specialized as your position. We fill the technical void left by standard sessions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const features = [
    {
      id: '01',
      title: 'Shot Reading',
      desc: 'Master the mechanics of wing and line shooters to predict trajectories before they leave the floor.',
    },
    {
      id: '02',
      title: 'Explosive Footwork',
      desc: 'Rapid lateral transitions and recovery techniques optimized for the tight angles of the 6-meter crease.',
    },
    {
      id: '03',
      title: 'Match Mentality',
      desc: 'Psychological resilience training to maintain focus after goals and dominate the shooter’s space.',
    }
  ];

  return (
    <section id="services" className="bg-brand-slate py-24 border-b border-brand-border">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-12 italic">// Services & Specialization</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-dark p-8 border-l-4 border-brand-blue hover:border-brand-yellow transition-colors group relative"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-black italic uppercase tracking-tighter">{f.title}</h4>
                <span className="text-slate-700 font-mono text-sm leading-none pt-1">{f.id}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 skew-x-12 transform translate-x-6 -translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  return (
    <footer className="bg-brand-dark border-b border-brand-border overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-stretch">
        <div className="px-10 py-10 md:py-16 border-r border-brand-border shrink-0 flex flex-col justify-center">
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] block mb-4 italic">Partners & Clubs</span>
          <div className="flex gap-8 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="font-black text-2xl italic tracking-tighter">NORDIC UNITED</span>
            <span className="font-black text-2xl italic tracking-tighter">ELITE HB</span>
          </div>
        </div>
        
        <div className="flex-1 px-10 py-10 md:py-16 flex flex-col md:flex-row gap-12 items-center">
          {[
            { quote: "Finally, a program that understands the unique pressure of being the last line of defense.", author: "Marc D., Div 1 Keeper" },
            { quote: "The reflex drills added 15% to my save rate in one season.", author: "Elena V., Youth National Team" }
          ].map((item, idx) => (
            <div key={idx} className="flex-1">
              <p className="text-sm italic text-slate-300 mb-3 leading-relaxed">"{item.quote}"</p>
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">— {item.author}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-brand-dark">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2">
        <div className="p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-5xl font-black italic leading-[0.9] uppercase tracking-tighter mb-8">
            STOP BEING THE <br/>
            <span className="text-brand-blue underline decoration-brand-yellow">TARGET.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-md">
            Ready to flip the script? Our technical audits identify the micro-flaws that shooters exploit.
          </p>
          <div className="flex flex-col gap-4">
             {['Custom roadmap', 'Video playback analysis', 'GK-specific strength'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300">
                <div className="w-4 h-[2px] bg-brand-yellow" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-blue p-10 md:p-20 text-white">
          <h3 className="font-black uppercase tracking-tight text-3xl italic mb-8">Skills Assessment</h3>
          {submitted ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-brand-blue-dark p-10 border border-white/20 text-center"
             >
               <h3 className="text-2xl font-black italic mb-2 tracking-tighter">AUDIT REQUESTED</h3>
               <p className="text-blue-100 text-sm">We'll scan your footage within 24 hours.</p>
             </motion.div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <input 
                type="text" 
                required
                className="w-full bg-brand-blue-dark border border-blue-500/50 p-4 font-bold placeholder-blue-300/50 focus:outline-none focus:border-brand-yellow uppercase text-sm tracking-widest" 
                placeholder="Full Name"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  required
                  className="flex-1 bg-brand-blue-dark border border-blue-500/50 p-4 font-bold placeholder-blue-300/50 focus:outline-none focus:border-brand-yellow uppercase text-sm tracking-widest" 
                  placeholder="Email Address"
                />
                <button className="bg-brand-yellow text-brand-dark px-10 py-4 font-black uppercase italic text-lg hover:bg-brand-yellow-light transition-all active:scale-95">
                  Request Audit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand-blue rounded-sm flex items-center justify-center font-black text-brand-yellow border border-brand-yellow italic text-[10px]">
            W
          </div>
          <div className="text-sm font-black italic tracking-tighter uppercase leading-none">
            Wall’s <span className="text-brand-blue">GK</span> Academy
          </div>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Wall's GK Academy. Elite Focused.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-yellow selection:text-brand-dark bg-brand-dark min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Proof />
      <Contact />
      <Footer />
    </div>
  );
}
