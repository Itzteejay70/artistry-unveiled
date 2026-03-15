import AnimatedSection from "./AnimatedSection";

const LocationSection = () => (
  <section id="location" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute -right-10 top-10 w-40 h-40 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12">
        <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">Find Us</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Event Location</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-gold via-lime to-purple rounded-full mx-auto" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Join us in the heart of Portmore, Jamaica — a vibrant community known for its rich cultural heritage
            and creative spirit. The festival takes place at a venue accessible to all.
          </p>
          <div className="space-y-4 mb-8">
            <div className="glass-card rounded-2xl p-5 hover:border-gold/30 transition-colors">
              <p className="text-foreground font-heading text-lg">Independence City Community Centre</p>
              <p className="text-muted-foreground text-sm">Portmore, St. Catherine, Jamaica</p>
            </div>
            <div className="glass-card rounded-2xl p-5 hover:border-lime/30 transition-colors">
              <p className="text-foreground font-heading text-lg">May 15, 2026</p>
              <p className="text-muted-foreground text-sm">11:00 AM – 3:00 PM • Free Entry</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Independence+City+Community+Centre+Portmore+Jamaica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get Directions →
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl overflow-hidden border-2 border-border/30 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.56!2d-76.88!3d17.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3fb00e93a1b7%3A0x3a1e37e3e3e3e3e3!2sPortmore%2C%20Jamaica!5e0!3m2!1sen!2sjm!4v1700000000000!5m2!1sen!2sjm"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event location map"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationSection;
