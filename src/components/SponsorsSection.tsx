import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import sponsorEasyAccess from "@/assets/sponsor-easyaccess.png";
import sponsorEdnaManley from "@/assets/sponsor-ednamanley.jpeg";
import sponsorTeamBmt from "@/assets/sponsor-teambmt.jpeg";

const sponsors = [
  { name: "Easy Access Event Essentials", logo: sponsorEasyAccess, bg: "bg-white" },
  { name: "Edna Manley College of the Visual and Performing Arts", logo: sponsorEdnaManley, bg: "bg-white" },
  { name: "Team BMT International", logo: sponsorTeamBmt, bg: "bg-secondary" },
];

const SponsorsSection = () => (
  <section className="py-20 border-t border-border/30 relative overflow-hidden">
    <div className="absolute -right-10 top-0 w-32 h-32 paint-blob bg-gold/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12">
        <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">
            Partners
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl text-foreground">
          Our Sponsors & Partners
        </h2>

        <div className="h-1 w-20 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
        {sponsors.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
               className={`glass-card rounded-2xl p-6 flex items-center justify-center hover:border-gold/40 transition-colors duration-300 cursor-pointer aspect-square ${s.bg}`}
            >
              <img
                src={s.logo}
                alt={s.name}
                className="w-full h-full object-contain max-h-40"
              />
            </motion.div>

            <p className="text-muted-foreground font-body text-xs text-center mt-3 leading-relaxed">
              {s.name}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsSection;