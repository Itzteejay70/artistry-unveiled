import AnimatedSection from "./AnimatedSection";
import festivalCollage from "@/assets/festival-collage.png";
import galleryDay from "@/assets/gallery-day.webp";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    {/* Decorative paint blobs */}
    <div className="absolute -right-16 top-20 w-64 h-64 paint-blob bg-purple/5 pointer-events-none" />
    <div className="absolute -left-20 bottom-10 w-48 h-48 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="inline-block bg-purple/15 border border-purple/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">About the Festival</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            A Celebration of<br />
            <span className="text-gradient-festival">Caribbean Creativity</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Portmore Art Connect is a community festival celebrating Caribbean creativity, art, and culture.
            Join us for a day filled with art displays, creative workshops, local vendors, music and
            performances, and community engagement in the heart of Portmore.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to create a vibrant space where artists and art lovers come together — connecting
            communities, inspiring creativity, and showcasing the incredible talent of Jamaica and the Caribbean.
          </p>

          {/* Paint-stroke divider */}
          <div className="h-1 w-32 bg-gradient-to-r from-lime via-gold to-purple rounded-full mb-8" />

          <div className="flex gap-10">
            <div>
              <div className="font-display text-4xl text-lime">20+</div>
              <div className="text-muted-foreground text-sm">Artists</div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold">4</div>
              <div className="text-muted-foreground text-sm">Hours</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">FREE</div>
              <div className="text-muted-foreground text-sm">Entry</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 paint-blob bg-gradient-to-br from-purple/10 to-lime/10 blur-lg" />
            <img
              src={festivalCollage}
              alt="Festival atmosphere collage"
              className="relative rounded-3xl w-full object-cover shadow-2xl shadow-purple/20"
            />
            {/* Overlay accent card */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-secondary-foreground px-6 py-4 rounded-2xl shadow-lg">
              <p className="font-display text-2xl tracking-wider">MAY 15</p>
              <p className="font-body text-xs">Portmore, JA</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
