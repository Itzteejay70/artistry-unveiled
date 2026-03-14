import AnimatedSection from "./AnimatedSection";
import portmore from "@/assets/portmore.jpeg";

const LocationSection = () => (
  <section id="location" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">Find Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Event Location</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Join us in the heart of Portmore, Jamaica — a vibrant community known for its rich cultural heritage
            and creative spirit.
          </p>
          <div className="space-y-4 mb-8">
            <div className="glass-card rounded-xl p-4">
              <p className="text-foreground font-heading text-lg">Portmore Town Centre</p>
              <p className="text-muted-foreground text-sm">Main Street, Portmore, St. Catherine, Jamaica</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-foreground font-heading text-lg">August 15–17, 2026</p>
              <p className="text-muted-foreground text-sm">Gates open at 9:00 AM daily</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Portmore+Jamaica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-lime/50 text-lime px-6 py-3 rounded-full font-semibold hover:bg-lime/10 transition-colors"
          >
            Get Directions →
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden">
            <img src={portmore} alt="Portmore, Jamaica" className="w-full rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationSection;
