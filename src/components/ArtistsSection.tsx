import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import artist1 from "@/assets/artist1.jpg";
import artist2 from "@/assets/artist2.jpg";
import artist3 from "@/assets/artist3.jpg";
import artist4 from "@/assets/artist4.jpg";

const artists = [
  { name: "Shana-Kay Williams", role: "Mixed Media & Painting", img: artist1, bio: "Exploring Caribbean identity through vibrant color and texture." },
  { name: "Marcus Thompson", role: "Sculpture & Installation", img: artist2, bio: "Creating immersive sculptural experiences from recycled materials." },
  { name: "Tanya-Marie Dawes", role: "Contemporary Art", img: artist3, bio: "Blending traditional Caribbean motifs with modern abstraction." },
  { name: "Devon 'Devo' Clarke", role: "Street Art & Murals", img: artist4, bio: "Transforming urban spaces with bold, culturally-rooted murals." },
];

const ArtistsSection = () => (
  <section id="artists" className="py-24 md:py-32 bg-muted/30">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">Featured Creators</p>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground">Meet the Artists</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {artists.map((a, i) => (
          <AnimatedSection key={a.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple/20"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-foreground/80 text-sm">{a.bio}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-foreground">{a.name}</h3>
                <p className="text-lime text-sm font-body">{a.role}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ArtistsSection;
