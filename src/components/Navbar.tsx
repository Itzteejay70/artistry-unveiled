import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Sponsors", href: "#sponsors" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-[#2f435a] font-extrabold text-lg md:text-xl tracking-wide uppercase"
        >
          Art Expo
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-black hover:text-[#6f35ff] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#register"
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-black/10 bg-white"
          >
            <div className="flex flex-col gap-4 px-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold uppercase tracking-wide text-black"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="bg-black text-white px-5 py-3 rounded-full text-center font-bold uppercase tracking-wide mt-2"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;