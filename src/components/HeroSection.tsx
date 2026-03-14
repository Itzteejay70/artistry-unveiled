import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import galleryNight from "@/assets/gallery-night.webp";
import confetti from "@/assets/confetti.jpeg";

const EVENT_DATE = new Date("2026-05-15T11:00:00");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <div className="absolute inset-0">
        <img src={galleryNight} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating elements */}
      <img src={confetti} alt="" className="absolute top-20 right-10 w-24 opacity-40 animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-16 h-16 rounded-full bg-lime/20 animate-float-slow" />
      <div className="absolute top-40 left-20 w-8 h-8 rounded-full bg-purple/30 animate-float" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-lime text-sm tracking-[0.3em] uppercase mb-4"
        >
          May 15, 2026 • 11AM–3PM • Portmore, Jamaica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-wider text-gradient-primary mb-6"
        >
          PORTMORE<br />ART CONNECT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-heading text-xl md:text-2xl text-foreground/80 italic mb-10 max-w-2xl mx-auto"
        >
          Where creativity meets community — a celebration of Caribbean art, culture & connection
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-6 md:gap-10 mb-10"
        >
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Minutes" },
            { val: timeLeft.seconds, label: "Seconds" },
          ].map((t) => (
            <div key={t.label} className="text-center">
              <div className="font-display text-4xl md:text-6xl text-foreground">{String(t.val).padStart(2, "0")}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{t.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#tickets" className="bg-gradient-lime text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
            Get Tickets
          </a>
          <a href="#apply" className="border border-lime/50 text-lime px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime/10 transition-colors">
            Apply as an Artist
          </a>
          <a href="#artists" className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground/5 transition-colors">
            Explore Artists
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-lime rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
