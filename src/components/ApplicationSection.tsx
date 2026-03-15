import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ApplicationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-4 torn-edge bg-background" />
      <div className="absolute -left-10 bottom-10 w-48 h-48 paint-blob bg-purple/5 pointer-events-none" />
      <div className="absolute -right-10 top-20 w-40 h-40 paint-blob bg-gold/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="inline-block bg-purple/15 border border-purple/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Join Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Apply as an Artist or Vendor</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple via-gold to-lime rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're looking for talented artists, craftspeople, and vendors to be part of Portmore Art Connect 2026.
              Share your work with the community and connect with fellow creatives.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3"><span className="text-gold">✦</span> Exhibition space provided</li>
              <li className="flex items-center gap-3"><span className="text-lime">✦</span> Marketing & promotion included</li>
              <li className="flex items-center gap-3"><span className="text-primary">✦</span> Networking opportunities</li>
              <li className="flex items-center gap-3"><span className="text-gold">✦</span> Sales commission-free</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center border-gold/30">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="font-heading text-2xl text-foreground mb-2">Application Received!</h3>
                <p className="text-muted-foreground">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Full Name</label>
                  <input required type="text" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
                  <input required type="email" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Artist Bio</label>
                  <textarea required rows={3} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Tell us about your art..." />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Portfolio Link</label>
                  <input type="url" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" placeholder="https://yourportfolio.com" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Social Media</label>
                  <input type="text" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" placeholder="@handle or URL" />
                </div>
                <button type="submit" className="w-full bg-gradient-lime text-secondary-foreground py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                  Submit Application
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
