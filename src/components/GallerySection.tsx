import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import workshopImg from "@/assets/workshops.jpeg";
import artwork1 from "@/assets/artwork1.jpg";
import festivalOutdoor from "@/assets/festival-outdoor.webp";
import festivalPark from "@/assets/festival-park.webp";
import festivalDj from "@/assets/festival-dj.jpeg";

const galleryItems = [
  {
    img: workshopImg,
    title: "Creative Workshops",
    category: "Interactive Experience",
    desc: "Hands-on creative sessions where visitors can explore pottery, bead making, and artistic crafts.",
  },
  {
    img: festivalOutdoor,
    title: "Outdoor Art Exhibition",
    category: "Festival Atmosphere",
    desc: "Open-air art displays bringing creativity and color to the festival environment.",
  },
  {
    img: festivalPark,
    title: "Community Art Displays",
    category: "Festival Experience",
    desc: "Art installations and creative works showcased in a lively outdoor setting.",
  },
  {
    img: festivalDj,
    title: "Music & Performances",
    category: "Live Culture",
    desc: "Music and performances adding rhythm and energy to the celebration.",
  },
  {
    img: artwork1,
    title: "Featured Artwork",
    category: "Art Display",
    desc: "A glimpse into the vibrant artwork showcased during the festival.",
  },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute -left-10 top-20 h-40 w-40 paint-blob bg-gold/5 pointer-events-none" />
      <div className="absolute -right-10 bottom-20 h-48 w-48 paint-blob bg-purple/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block rounded-full border border-purple/30 bg-purple/15 px-4 py-1.5 mb-4">
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
              Festival Atmosphere
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            Moments from the Experience
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            A glimpse into the creativity, culture, and vibrant energy of
            Portmore Art Connect.
          </p>

          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-purple via-gold to-lime mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured image */}
          <motion.div
            style={{ y }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(galleryItems[0])}
            className="relative overflow-hidden rounded-2xl cursor-pointer group lg:col-span-2"
          >
            <img
              src={galleryItems[0].img}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.18em] mb-1">
                  {galleryItems[0].category}
                </p>
                <h3 className="font-heading text-2xl text-white">
                  {galleryItems[0].title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Remaining images */}
          {galleryItems.slice(1).map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <div>
                  <p className="text-gold text-xs uppercase tracking-[0.18em] mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-lg text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-foreground hover:text-gold transition-colors"
              >
                <X size={28} />
              </button>

              <div className="grid md:grid-cols-2">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-full max-h-[70vh] object-cover"
                />

                <div className="flex flex-col justify-center p-8">
                  <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                    {selected.category}
                  </p>

                  <h3 className="font-heading text-3xl text-foreground mb-4">
                    {selected.title}
                  </h3>

                  <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-gold to-lime mb-4" />

                  <p className="text-muted-foreground leading-relaxed">
                    {selected.desc}
                  </p>
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