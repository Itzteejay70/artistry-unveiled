import AnimatedSection from "./AnimatedSection";
import festivalCollage from "@/assets/festival-collage.png";
import brushGreen from "@/assets/brush-green.jpeg";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    <img src={brushGreen} alt="" className="absolute -right-20 top-0 w-48 opacity-20 rotate-45 pointer-events-none" />
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">About the Festival</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            A Celebration of<br /><span className="text-gradient-primary">Caribbean Creativity</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Portmore Art Connect is an immersive art festival bringing together painters, sculptors, digital artists,
            musicians, and creatives from across Jamaica and the Caribbean. Born from a passion to celebrate the vibrant
            artistic culture of Portmore and beyond.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our mission is to create a space where art transcends boundaries — connecting communities, inspiring new
            generations of artists, and showcasing the incredible talent that exists in our region.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="font-display text-4xl text-lime">50+</div>
              <div className="text-muted-foreground text-sm">Artists</div>
            </div>
            <div>
              <div className="font-display text-4xl text-lime">3</div>
              <div className="text-muted-foreground text-sm">Days</div>
            </div>
            <div>
              <div className="font-display text-4xl text-lime">10K+</div>
              <div className="text-muted-foreground text-sm">Visitors</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <img
              src={festivalCollage}
              alt="Festival atmosphere collage"
              className="rounded-2xl w-full object-cover shadow-2xl shadow-purple/20"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-lime/30 rounded-2xl" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
