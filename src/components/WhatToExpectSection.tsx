import { Palette, Music, Users, Store, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  { icon: Palette, title: "Live Art Demonstrations", desc: "Watch artists create stunning pieces live, from canvas painting to mural work.", color: "text-lime" },
  { icon: GraduationCap, title: "Creative Workshops", desc: "Hands-on art sessions for all ages — learn new techniques and unleash your creativity.", color: "text-gold" },
  { icon: Store, title: "Local Art Vendors", desc: "Browse and purchase original artwork, crafts, and creative goods from local artists.", color: "text-primary" },
  { icon: Music, title: "Music & Performances", desc: "Enjoy live music, spoken word, and cultural performances throughout the day.", color: "text-lime" },
  { icon: Users, title: "Community Networking", desc: "Connect with artists, art lovers, and creatives in a vibrant community setting.", color: "text-gold" },
  { icon: Sparkles, title: "Interactive Installations", desc: "Explore immersive art installations and interactive creative experiences.", color: "text-primary" },
];

const WhatToExpectSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Torn edge top */}
    <div className="absolute top-0 left-0 right-0 h-4 bg-muted/30 torn-edge" />

    {/* Paint blobs */}
    <div className="absolute top-10 right-10 w-40 h-40 paint-blob bg-gold/5 pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-32 h-32 paint-blob bg-purple/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">Experiences</span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">What to Expect</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 text-center group cursor-pointer transition-shadow duration-500 hover:shadow-xl hover:shadow-purple/10 hover:border-lime/30"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card mb-5 ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                <exp.icon size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhatToExpectSection;
