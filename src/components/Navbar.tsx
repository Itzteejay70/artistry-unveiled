import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Artists", href: "#artists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tickets", href: "#tickets" },
  { label: "Apply", href: "#apply" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logoImg} alt="Portmore Art Connect" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl tracking-wider text-foreground">PORTMORE ART CONNECT</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-lime transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#tickets" className="bg-gradient-lime text-secondary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Tickets
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-border/30"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground font-body text-lg hover:text-lime transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#tickets" className="bg-gradient-lime text-secondary-foreground px-5 py-3 rounded-full text-center font-semibold mt-2">
                Get Tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
