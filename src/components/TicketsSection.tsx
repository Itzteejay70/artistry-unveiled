import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tickets = [
  {
    name: "Free Entry",
    price: "FREE",
    features: ["Access to all exhibition areas", "Live performances", "Creative expo activities", "Outdoor art exhibition"],
    popular: true,
  },
];

const TicketsSection = () => (
  <section id="tickets" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">Secure Your Spot</p>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground">Get Your Tickets</h2>
      </AnimatedSection>

      <div className="flex justify-center max-w-5xl mx-auto">
        {tickets.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-2xl p-10 flex flex-col transition-shadow duration-500 hover:shadow-2xl border-lime/50 hover:shadow-lime/20 max-w-md"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-lime text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Open to All
              </div>
              <h3 className="font-heading text-3xl text-foreground mb-2 text-center">{t.name}</h3>
              <div className="mb-6 text-center">
                <span className="font-display text-6xl text-lime">{t.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Check size={16} className="text-lime flex-shrink-0" />
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
