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
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">Artwork Showcase</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground">The Gallery</h2>
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(a)}
                className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid"
              >
                <img src={a.img} alt={a.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-heading text-xl text-foreground">{a.title}</h3>
                  <p className="text-lime text-sm">{a.artist}</p>
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
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 text-foreground hover:text-lime transition-colors">
                <X size={28} />
              </button>
              <div className="grid md:grid-cols-2">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover max-h-[70vh]" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-3xl text-foreground mb-2">{selected.title}</h3>
                  <p className="text-lime font-body mb-4">{selected.artist}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{selected.desc}</p>
                  <button className="border border-lime/50 text-lime px-6 py-3 rounded-full font-semibold hover:bg-lime/10 transition-colors self-start">
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
