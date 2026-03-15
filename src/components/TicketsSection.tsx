import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tickets = [
  {
    name: "Free Entry",
    price: "FREE",
    features: ["Access to all exhibition areas", "Live performances", "Creative expo activities", "Outdoor art exhibition", "Community networking"],
    popular: true,
  },
];

const TicketsSection = () => (
  <section id="tickets" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute -left-10 top-10 w-48 h-48 paint-blob bg-gold/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block bg-lime/15 border border-lime/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-lime font-body text-sm tracking-[0.2em] uppercase">Secure Your Spot</span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Get Your Tickets</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto" />
      </AnimatedSection>

      <div className="flex justify-center max-w-5xl mx-auto">
        {tickets.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-2xl p-10 flex flex-col transition-shadow duration-500 hover:shadow-2xl border-gold/30 hover:shadow-gold/20 max-w-md hover:border-gold/50"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Open to All
              </div>
              <h3 className="font-heading text-3xl text-foreground mb-2 text-center">{t.name}</h3>
              <div className="mb-6 text-center">
                <span className="font-display text-6xl text-gold">{t.price}</span>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-lime rounded-full mx-auto mb-6" />
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Check size={16} className="text-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="w-full py-3 rounded-full font-semibold transition-opacity hover:opacity-90 bg-gradient-lime text-secondary-foreground text-center"
              >
                Register Now
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TicketsSection;
