import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Store, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ApplicationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [applicantType, setApplicantType] = useState("artist");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-muted/30 py-24 md:py-32"
    >
      <div className="absolute top-0 left-0 right-0 h-4 torn-edge bg-background" />
      <div className="absolute -left-10 bottom-10 h-48 w-48 paint-blob bg-purple/5 pointer-events-none" />
      <div className="absolute -right-10 top-20 h-40 w-40 paint-blob bg-gold/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl items-start gap-16 md:grid-cols-2">
          {/* Left content */}
          <AnimatedSection>
            <div className="inline-block rounded-full border border-purple/30 bg-purple/15 px-4 py-1.5 mb-4">
              <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
                Join Us
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Apply as an Artist or Vendor
            </h2>

            <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple via-gold to-lime" />

            <p className="text-muted-foreground leading-relaxed mb-8">
              We’re inviting artists, makers, and creative vendors to be part of
              Portmore Art Connect 2026. Share your work, connect with the
              community, and be part of a vibrant cultural experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Exhibition Opportunities
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Showcase your art or products in a creative festival setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Promotion & Visibility
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get featured as part of the event experience and audience
                    engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-purple/15 text-primary">
                  <Store size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Community Connection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Meet fellow creatives, art lovers, and potential supporters.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right form / success */}
          <AnimatedSection delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  className="glass-card rounded-3xl border border-gold/30 p-10 text-center"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    Application Received
                  </h3>

                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Thanks for applying to be part of Portmore Art Connect 2026.
                    We’ll review your submission and reach out with the next steps.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-8 space-y-5"
                >
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Applying As
                    </label>
                    <select
                      value={applicantType}
                      onChange={(e) => setApplicantType(e.target.value)}
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                    >
                      <option value="artist">Artist</option>
                      <option value="vendor">Vendor</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      {applicantType === "artist"
                        ? "About Your Work"
                        : "About Your Brand / Business"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        applicantType === "artist"
                          ? "Tell us about your art, style, or creative practice..."
                          : "Tell us about your products, brand, or what you would like to showcase..."
                      }
                      className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Portfolio / Website Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourportfolio.com"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Social Media
                    </label>
                    <input
                      type="text"
                      placeholder="@handle or profile link"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-lime py-3 text-lg font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
                  >
                    Submit Application
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;