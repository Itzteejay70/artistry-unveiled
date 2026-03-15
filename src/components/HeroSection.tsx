import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import galleryNight from "@/assets/gallery-night.webp";
import decorBrushBlue from "@/assets/decor-brush-blue.jpeg";
import decorBrushGreen from "@/assets/decor-brush-green.jpeg";

const EVENT_DATE = new Date("2026-05-15T11:00:00");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = EVENT_DATE.getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

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
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={galleryNight}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-festival" />
      </div>

      {/* Decorative paint brushes */}
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

      {/* Floating paint blobs */}
      <div className="absolute top-20 right-10 w-32 h-32 paint-blob bg-lime/10 animate-float pointer-events-none" />
      <div className="absolute bottom-40 left-8 w-24 h-24 paint-blob bg-purple/15 animate-float-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 paint-blob bg-gold/10 animate-float pointer-events-none" />

      {/* Soft glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-purple/20 blur-3xl" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-block bg-lime/15 border border-lime/30 rounded-full px-5 py-2 mb-6"
          >
            <span className="font-body text-lime text-sm tracking-wider uppercase">
              May 15, 2026 • 11AM–3PM • Portmore, Jamaica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wider mb-6"
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
            className="font-heading text-xl md:text-2xl text-foreground/70 italic mb-4 max-w-2xl mx-auto"
          >
            A vibrant Caribbean celebration of art, culture & community
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm md:text-base text-foreground/60 mb-8"
          >
            Live Art • Workshops • Music • Vendors • Community
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-4 md:gap-6 mb-10 flex-wrap"
          >
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hrs" },
              { val: timeLeft.minutes, label: "Min" },
              { val: timeLeft.seconds, label: "Sec" },
            ].map((t) => (
              <div
                key={t.label}
                className="text-center bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl px-4 py-3 min-w-[72px]"
              >
                <div className="font-display text-3xl md:text-4xl text-lime">
                  {String(t.val).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                  {t.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center flex-col sm:flex-row gap-3"
          >
            <a
              href="#tickets"
              className="bg-gradient-lime text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity text-center"
            >
              Get Tickets
            </a>
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