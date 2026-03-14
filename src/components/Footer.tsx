import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-muted/30 border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-4">PORTMORE ART CONNECT</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Celebrating Caribbean art, culture, and community. Join us for an unforgettable artistic experience.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Artists", "Gallery", "Schedule", "Tickets", "Apply"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-lime transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Stay Updated</h4>
            {subscribed ? (
              <p className="text-lime text-sm">Thanks for subscribing! 🎨</p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button type="submit" className="bg-gradient-lime text-secondary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </form>
            )}

            <div className="flex gap-4 mt-6">
              {["Instagram", "Twitter", "Facebook", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-muted-foreground text-sm hover:text-lime transition-colors">
                  {s}
                </a>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mt-4">
              Contact: <a href="mailto:info@portmoreartconnect.com" className="hover:text-lime transition-colors">info@portmoreartconnect.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground text-xs">© 2026 Portmore Art Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
