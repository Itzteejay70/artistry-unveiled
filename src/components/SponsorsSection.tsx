import AnimatedSection from "./AnimatedSection";

const sponsors = [
  "Jamaica Cultural Development Commission",
  "National Gallery of Jamaica",
  "Jamaica Tourist Board",
  "Portmore City Council",
  "Caribbean Arts Foundation",
  "Island Creative Studios",
  "Jamaica Cultural Development Commission",
  "National Gallery of Jamaica",
];

const SponsorsSection = () => (
  <section className="py-16 border-t border-border/30">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-10">
        <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase">Our Sponsors & Partners</p>
      </AnimatedSection>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-16">
          {sponsors.concat(sponsors).map((s, i) => (
            <div key={i} className="flex-shrink-0 glass-card rounded-lg px-8 py-4 text-muted-foreground font-body text-sm hover:text-lime hover:border-lime/30 transition-colors whitespace-nowrap">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SponsorsSection;
