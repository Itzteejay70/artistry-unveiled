import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import galleryNight from "@/assets/gallery-night.webp";
import festivalCollage from "@/assets/festival-collage.png";
import decorBrushBlue from "@/assets/decor-brush-blue.jpeg";
import decorBrushGreen from "@/assets/decor-brush-green.jpeg";
import decorConfetti from "@/assets/decor-confetti.jpeg";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={galleryNight} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-festival" />
      </div>

      {/* Decorative paint brushes & confetti */}
      <motion.img
        src={decorBrushBlue}
        alt=""
        className="absolute -top-10 -right-10 w-48 md:w-64 opacity-20 pointer-events-none rotate-12"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={decorBrushGreen}
        alt=""
        className="absolute -bottom-10 -left-6 w-32 md:w-48 opacity-20 pointer-events-none -rotate-45"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={decorConfetti}
        alt=""
        className="absolute top-10 left-10 w-24 md:w-32 opacity-15 pointer-events-none"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating paint blobs */}
      <div className="absolute top-20 right-10 w-32 h-32 paint-blob bg-lime/10 animate-float pointer-events-none" />
      <div className="absolute bottom-40 left-8 w-24 h-24 paint-blob bg-purple/15 animate-float-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 paint-blob bg-gold/10 animate-float pointer-events-none" />

      {/* Split layout */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-block bg-lime/15 border border-lime/30 rounded-full px-5 py-2 mb-6"
            >
              <span className="font-body text-lime text-sm tracking-wider uppercase">
                May 15, 2026 • 11AM–3PM • Portmore, JA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider mb-6"
            >
              <span className="text-foreground">PORTMORE</span>
              <br />
              <span className="text-gradient-festival">ART</span>{" "}
              <span className="text-foreground">CONNECT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-heading text-xl md:text-2xl text-foreground/70 italic mb-8 max-w-lg"
            >
              A vibrant Caribbean celebration of art, culture & community
            </motion.p>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 md:gap-6 mb-10"
            >
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hrs" },
                { val: timeLeft.minutes, label: "Min" },
                { val: timeLeft.seconds, label: "Sec" },
              ].map((t) => (
                <div key={t.label} className="text-center bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl px-4 py-3 min-w-[60px]">
                  <div className="font-display text-3xl md:text-4xl text-lime">{String(t.val).padStart(2, "0")}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">{t.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#tickets" className="bg-gradient-lime text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity text-center">
                Get Tickets
              </a>
              <a href="#apply" className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition-colors text-center">
                Apply as Artist
              </a>
              <a href="#about" className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground/5 transition-colors text-center">
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right — Festival image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Paint splash border effect */}
              <div className="absolute -inset-4 paint-blob bg-gradient-to-br from-purple/20 via-lime/10 to-gold/20 blur-xl" />
              <img
                src={festivalCollage}
                alt="Portmore Art Connect festival atmosphere"
                className="relative w-full rounded-3xl shadow-2xl shadow-purple/30 border-2 border-border/30"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gold text-secondary-foreground px-5 py-3 rounded-2xl font-display text-xl tracking-wider shadow-lg"
              >
                FREE ENTRY 🎨
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple text-primary-foreground px-4 py-2 rounded-xl font-body text-sm font-semibold shadow-lg"
              >
                ✦ Live Art
              </motion.div>
            </div>
          </motion.div>
        </div>
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
