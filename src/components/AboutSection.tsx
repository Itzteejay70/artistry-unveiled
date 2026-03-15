import AnimatedSection from "./AnimatedSection";
import festivalCollage from "@/assets/festival-collage.png";
import decorBrushBlue from "@/assets/decor-brush-blue.jpeg";

const AboutSection = () => (
  <section id="about" className="relative overflow-hidden py-24 md:py-32">
    {/* Decorative elements */}
    <img
      src={decorBrushBlue}
      alt=""
      className="absolute -right-16 top-10 w-40 rotate-45 opacity-10 pointer-events-none"
    />
    <div className="absolute -left-20 bottom-10 h-48 w-48 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <AnimatedSection>
          <div className="inline-block rounded-full border border-purple/30 bg-purple/15 px-4 py-1.5 mb-4">
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              About the Festival
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
            A Celebration of
            <br />
            <span className="text-gradient-festival">Caribbean Creativity</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Portmore Art Connect is a vibrant community festival celebrating Caribbean
            creativity, culture, and connection. Join us for an unforgettable day of
            art displays, hands-on workshops, local vendors, music, performances, and
            shared creative experiences in the heart of Portmore.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to create a space where artists, creatives, and art lovers
            can come together to inspire one another, strengthen community, and
            showcase the incredible talent found across Jamaica and the wider Caribbean.
          </p>

          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-lime via-gold to-purple mb-8" />

          {/* Festival highlights */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            <div>
              <div className="font-display text-3xl md:text-4xl text-lime">Live</div>
              <div className="text-muted-foreground text-sm">Art & Expression</div>
            </div>

            <div>
              <div className="font-display text-3xl md:text-4xl text-gold">One-Day</div>
              <div className="text-muted-foreground text-sm">Festival Experience</div>
            </div>

            <div>
              <div className="font-display text-3xl md:text-4xl text-primary">Creative</div>
              <div className="text-muted-foreground text-sm">Community</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 paint-blob bg-gradient-to-br from-purple/10 to-lime/10 blur-lg" />

            <img
              src={festivalCollage}
              alt="Festival atmosphere collage"
              className="relative w-full rounded-3xl object-cover shadow-2xl shadow-purple/20"
            />

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-gold px-6 py-4 text-secondary-foreground shadow-lg">
              <p className="font-display text-xl md:text-2xl tracking-wider">
                MAY 15, 2026
              </p>
              <p className="font-body text-xs md:text-sm">
                Portmore • Art • Culture • Community
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;