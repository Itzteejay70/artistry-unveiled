import { Palette, Music, Users, Store, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    icon: Palette,
    title: "Live Art Demonstrations",
    desc: "Watch creatives bring their work to life in real time.",
    color: "text-lime",
  },
  {
    icon: GraduationCap,
    title: "Creative Workshops",
    desc: "Join hands-on sessions designed to inspire all ages.",
    color: "text-gold",
  },
  {
    icon: Store,
    title: "Local Art Vendors",
    desc: "Discover original artwork, handmade crafts, and creative goods.",
    color: "text-primary",
  },
  {
    icon: Music,
    title: "Music & Performances",
    desc: "Enjoy live music, spoken word, and cultural performances throughout the day.",
    color: "text-lime",
  },
  {
    icon: Users,
    title: "Creative Community",
    desc: "Connect with artists, art lovers, and creatives in a vibrant shared space.",
    color: "text-gold",
  },
];

const WhatToExpectSection = () => (
  <section id="what-to-expect" className="relative overflow-hidden py-24 md:py-32">
    {/* Torn edge top */}
    <div className="absolute top-0 left-0 right-0 h-4 bg-muted/30 torn-edge" />

    {/* Decorative blobs */}
    <div className="absolute top-10 right-10 w-40 h-40 paint-blob bg-gold/5 pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-32 h-32 paint-blob bg-purple/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block rounded-full border border-gold/30 bg-gold/15 px-4 py-1.5 mb-4">
          <span className="font-body text-sm tracking-[0.2em] uppercase text-gold">
            Experiences
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
          What to Expect
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-5">
          Explore a day filled with art, culture, music, and creative connection.
        </p>

        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-lime via-gold to-purple mx-auto" />
      </AnimatedSection>

      <div className="grid max-w-5xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card h-full rounded-2xl p-8 text-center group transition-shadow duration-500 hover:shadow-xl hover:shadow-purple/10 hover:border-lime/30"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-white/10 bg-card/80 mb-5 ${exp.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <exp.icon size={28} />
              </div>

              <h3 className="font-heading text-xl text-foreground mb-3">
                {exp.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.desc}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhatToExpectSection;