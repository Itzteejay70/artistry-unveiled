import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Ticket,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  "Access to all exhibition areas",
  "Live performances",
  "Creative expo activities",
  "Outdoor art exhibition",
  "Community networking",
];

const TicketsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace this with your backend/API/form service later
    console.log("Registration data:", formData);

    setSubmitted(true);
    setShowForm(false);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section id="register" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute -left-10 top-10 h-48 w-48 paint-blob bg-gold/5 pointer-events-none" />
      <div className="absolute -right-10 bottom-10 h-40 w-40 paint-blob bg-purple/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full border border-lime/30 bg-lime/15 px-4 py-1.5 mb-4">
            <span className="text-lime font-body text-sm tracking-[0.2em] uppercase">
              Reserve Your Spot
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            Register to Attend
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Entry is free. Reserve your place and be part of a vibrant day of art,
            culture, music, and community.
          </p>

          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-lime via-gold to-purple mx-auto" />
        </AnimatedSection>

        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -6 }}
              className="relative grid gap-8 rounded-3xl border border-gold/30 glass-card p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10 transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-secondary-foreground">
                Open to All
              </div>

              {/* Left content */}
              <div>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Ticket size={28} />
                </div>

                <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
                  Free Entry
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Join us for a one-day celebration of creativity and connection.
                  Register now to enjoy the full festival experience.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="text-gold" size={18} />
                    <span>May 15, 2026</span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="text-gold" size={18} />
                    <span>11:00 AM – 3:00 PM</span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="text-gold" size={18} />
                    <span>Portmore</span>
                  </div>
                </div>

                <div className="flex items-end gap-3 mb-6">
                  <span className="font-display text-5xl md:text-6xl text-gold leading-none">
                    FREE
                  </span>
                  <span className="pb-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    Entry Pass
                  </span>
                </div>

                {!submitted ? (
                  <button
                    type="button"
                    onClick={() => setShowForm((prev) => !prev)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-lime px-8 py-4 text-center font-semibold text-lg text-secondary-foreground transition-opacity hover:opacity-90"
                  >
                    {showForm ? "Close Form" : "Register Now"}
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/30 px-5 py-3 text-lime font-semibold">
                    <Check size={18} />
                    Registration Received
                  </div>
                )}
              </div>

              {/* Right benefits */}
              <div>
                <div className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-sm">
                  <p className="font-body text-sm uppercase tracking-[0.18em] text-gold mb-4">
                    What’s Included
                  </p>

                  <ul className="space-y-4">
                    {benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Registration Form */}
          <AnimatePresence>
            {showForm && !submitted && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className="mt-8"
              >
                <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card/50 p-6 md:p-8 backdrop-blur-md shadow-xl">
                  <div className="mb-6">
                    <h4 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                      Complete Your Registration
                    </h4>
                    <p className="text-muted-foreground">
                      Fill in your details below to reserve your free entry.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-4 text-foreground outline-none transition focus:border-gold/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-4 text-foreground outline-none transition focus:border-gold/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-4 text-foreground outline-none transition focus:border-gold/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-lime px-6 py-4 text-center font-semibold text-lg text-secondary-foreground transition-opacity hover:opacity-90"
                    >
                      Submit Registration
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className="mt-8"
              >
                <div className="mx-auto max-w-3xl rounded-3xl border border-lime/30 bg-lime/10 p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime/20 text-lime">
                    <Check size={28} />
                  </div>

                  <h4 className="font-heading text-2xl text-foreground mb-2">
                    You’re Registered
                  </h4>

                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Your registration has been received successfully.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;