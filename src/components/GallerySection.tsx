import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import artwork1 from "@/assets/artwork1.jpg";
import artwork2 from "@/assets/artwork2.jpg";
import artwork3 from "@/assets/artwork3.jpg";
import artwork4 from "@/assets/artwork4.jpg";
import artwork5 from "@/assets/artwork5.jpg";
import artwork6 from "@/assets/artwork6.jpg";

const artworks = [
  { img: artwork1, title: "Chromatic Pulse", artist: "Shana-Kay Williams", desc: "An explosion of Caribbean color expressing the rhythm of island life." },
  { img: artwork2, title: "Paradise Found", artist: "Marcus Thompson", desc: "A vivid tropical landscape capturing the essence of Jamaica's coastline." },
  { img: artwork3, title: "Rhythm & Soul", artist: "Tanya-Marie Dawes", desc: "Figurative celebration of Caribbean dance and cultural joy." },
  { img: artwork4, title: "Tropical Flora", artist: "Devon Clarke", desc: "Mixed media collage celebrating the natural beauty of the Caribbean." },
  { img: artwork5, title: "Village Life", artist: "Shana-Kay Williams", desc: "Abstract expressionist piece depicting Caribbean community gatherings." },
  { img: artwork6, title: "Queen of the Island", artist: "Tanya-Marie Dawes", desc: "Bold portrait celebrating Caribbean feminine beauty and strength." },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<typeof artworks[0] | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -left-10 top-20 w-40 h-40 paint-blob bg-gold/5 pointer-events-none" />
      <div className="absolute -right-10 bottom-20 w-48 h-48 paint-blob bg-purple/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block bg-purple/15 border border-purple/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Artwork Showcase</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">The Gallery</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple via-gold to-lime rounded-full mx-auto" />
        </AnimatedSection>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(a)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid border-2 border-transparent hover:border-gold/30 transition-colors duration-300"
              >
                <img src={a.img} alt={a.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-heading text-xl text-foreground">{a.title}</h3>
                  <p className="text-gold text-sm">{a.artist}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 text-foreground hover:text-gold transition-colors">
                <X size={28} />
              </button>
              <div className="grid md:grid-cols-2">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover max-h-[70vh]" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-3xl text-foreground mb-2">{selected.title}</h3>
                  <p className="text-gold font-body mb-4">{selected.artist}</p>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-lime rounded-full mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">{selected.desc}</p>
                  <button className="border border-gold/50 text-gold px-6 py-3 rounded-full font-semibold hover:bg-gold/10 transition-colors self-start">
                    Inquire About This Artwork
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
