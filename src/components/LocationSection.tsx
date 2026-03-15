import { MapPin, Calendar, Clock, Navigation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const LocationSection = () => (
  <section id="location" className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute -right-10 top-10 h-40 w-40 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <div className="inline-block rounded-full border border-gold/30 bg-gold/15 px-4 py-1.5 mb-4">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">
            Find Us
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
          Event Location
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Join us in the heart of Portmore for a vibrant celebration of art,
          culture, and creativity.
        </p>

        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-gold via-lime to-purple mx-auto" />
      </AnimatedSection>

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Left info */}
        <AnimatedSection>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Portmore Art Connect takes place at the Independence City Community
            Centre — a central gathering space where artists, creatives, and the
            community come together to celebrate creativity.
          </p>

          <div className="space-y-4 mb-8">
            <div className="glass-card flex items-start gap-4 rounded-2xl p-5 hover:border-gold/30 transition-colors">
              <MapPin className="text-gold mt-1" size={20} />
              <div>
                <p className="font-heading text-lg text-foreground">
                  Independence City Community Centre
                </p>
                <p className="text-muted-foreground text-sm">
                  Portmore, St. Catherine
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4 rounded-2xl p-5 hover:border-lime/30 transition-colors">
              <Calendar className="text-lime mt-1" size={20} />
              <div>
                <p className="font-heading text-lg text-foreground">
                  May 15, 2026
                </p>
                <p className="text-muted-foreground text-sm">
                  Festival Day
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4 rounded-2xl p-5 hover:border-purple/30 transition-colors">
              <Clock className="text-primary mt-1" size={20} />
              <div>
                <p className="font-heading text-lg text-foreground">
                  11:00 AM – 3:00 PM
                </p>
                <p className="text-muted-foreground text-sm">
                  Free entry for all attendees
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Independence+City+Community+Centre+Portmore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            Get Directions
            <Navigation size={18} />
          </a>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection delay={0.2}>
          <div className="overflow-hidden rounded-3xl border border-border/30 shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Independence+City+Community+Centre+Portmore&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              title="Event location map"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationSection;