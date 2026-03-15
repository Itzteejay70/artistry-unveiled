import { useState } from "react";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Schedule", href: "#schedule" },
    { name: "Register", href: "#register" },
    { name: "Apply", href: "#apply" },
    { name: "Location", href: "#location" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-muted/30 py-16">
      <div className="absolute -right-10 -bottom-10 h-48 w-48 paint-blob bg-purple/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-2">
              PORTMORE ART CONNECT
            </h3>

            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-lime via-gold to-purple mb-4" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              A celebration of art, culture, and community — bringing creatives
              together for a vibrant festival experience.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-lime"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter + contact */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">
              Stay Updated
            </h4>

            {subscribed ? (
              <p className="text-sm text-lime">
                🎨 You're subscribed! We'll keep you updated.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-lime/50 focus:outline-none"
                />

                <button
                  type="submit"
                  className="rounded-full bg-gradient-lime px-5 py-2 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Contact */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:Portmoreartconnect@gmail.com"
                  className="hover:text-lime transition-colors"
                >
                  Portmoreartconnect@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="tel:8764389159"
                  className="hover:text-lime transition-colors"
                >
                  876-438-9159
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8 text-center">
       <p className="text-muted-foreground text-xs">
  © 2026 Portmore Art Connect • Designed & Developed by{" "}
  <a
    href="https://toluwalope-oredipe-portfolio.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-lime transition-colors"
  >
    Toluwalope Oredipe
  </a>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;