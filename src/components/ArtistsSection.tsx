import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import artist1 from "@/assets/artist1.jpg";
import artist2 from "@/assets/artist2.jpg";
import artist3 from "@/assets/artist3.jpg";
import artist4 from "@/assets/artist4.jpg";

const artists = [
  { name: "Travis Arts", role: "Mixed Media & Painting", img: artist1, bio: "Exploring Caribbean identity through vibrant color and texture." },
  { name: "Javeer Arts", role: "Sculpture & Installation", img: artist2, bio: "Creating immersive sculptural experiences from recycled materials." },
  { name: "Locksley Watson", role: "Contemporary Art", img: artist3, bio: "Blending traditional Caribbean motifs with modern abstraction." },
  { name: "Omar Johnson", role: "Street Art & Murals", img: artist4, bio: "Transforming urban spaces with bold, culturally-rooted murals." },
];

const ArtistsSection = () => (
  <section id="artists" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-4 torn-edge bg-background" />
    <div className="absolute -right-10 top-20 w-48 h-48 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block bg-lime/15 border border-lime/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-lime font-body text-sm tracking-[0.2em] uppercase">Featured Creators</span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Meet the Artists</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {artists.map((a, i) => (
          <AnimatedSection key={a.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple/20 hover:border-gold/30"
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
                <p className="text-gold text-sm font-body">{a.role}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ArtistsSection;
