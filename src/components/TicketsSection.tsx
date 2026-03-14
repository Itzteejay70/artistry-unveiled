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

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tickets.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              className={`relative glass-card rounded-2xl p-8 flex flex-col transition-shadow duration-500 hover:shadow-2xl ${
                t.popular ? "border-lime/50 hover:shadow-lime/20" : "hover:shadow-purple/10"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-lime text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl text-foreground mb-2">{t.name}</h3>
              <div className="mb-6">
                <span className="font-display text-5xl text-lime">{t.price}</span>
                {t.sub && <span className="text-muted-foreground text-sm ml-2">{t.sub}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Check size={16} className="text-lime flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold transition-opacity hover:opacity-90 ${
                  t.popular ? "bg-gradient-lime text-secondary-foreground" : "border border-foreground/20 text-foreground hover:bg-foreground/5"
                }`}
              >
                Buy Ticket
              </button>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TicketsSection;
