import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const sponsors = [
  "Easy Access Event Essentials",
  "Edna Manley College of the Visual and Performing Arts",
  "Team BMT International",
];

const SponsorsSection = () => (
  <section className="py-20 border-t border-border/30 relative overflow-hidden">
    <div className="absolute -right-10 top-0 w-32 h-32 paint-blob bg-gold/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12">
        <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">Partners</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Our Sponsors & Partners</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {sponsors.map((s, i) => (
          <AnimatedSection key={s} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl px-6 py-8 text-center hover:border-gold/40 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-4 paint-blob bg-gold/15 flex items-center justify-center">
                <span className="font-display text-xl text-gold">✦</span>
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed">{s}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsSection;
