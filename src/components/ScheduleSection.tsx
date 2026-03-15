import { Palette, Music, Users, Mic2, PartyPopper, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const schedule = [
  { time: "11:00 AM", title: "Opening Ceremony", desc: "Welcome address and ribbon cutting with live drumming", icon: PartyPopper, color: "bg-gold" },
  { time: "11:30 AM", title: "Outdoor Art Exhibition", desc: "Featuring local artists including Travis Arts, Javeer Arts, Locksley Watson & more", icon: Palette, color: "bg-lime" },
  { time: "12:00 PM", title: "Live Performances", desc: "Music and spoken word performances on the main stage", icon: Music, color: "bg-primary" },
  { time: "1:00 PM", title: "Creative Workshops", desc: "Interactive art activities and creative demonstrations", icon: GraduationCap, color: "bg-gold" },
  { time: "2:00 PM", title: "Artist Showcases", desc: "Live painting demonstrations by featured artists", icon: Mic2, color: "bg-lime" },
  { time: "3:00 PM", title: "Closing Celebration", desc: "Final showcase and community celebration", icon: Users, color: "bg-primary" },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-4 torn-edge bg-background" />
    <div className="absolute -right-10 top-1/4 w-48 h-48 paint-blob bg-purple/5 pointer-events-none" />
    <div className="absolute -left-10 bottom-1/4 w-40 h-40 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block bg-lime/15 border border-lime/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-lime font-body text-sm tracking-[0.2em] uppercase">Event Day</span>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Event Schedule</h2>
        <p className="text-muted-foreground max-w-md mx-auto">May 15, 2026 — 11AM to 3PM</p>
        <div className="h-1 w-24 bg-gradient-to-r from-lime via-gold to-purple rounded-full mx-auto mt-4" />
      </AnimatedSection>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime via-gold to-purple" />

        {schedule.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className={`absolute left-6 md:left-1/2 w-4 h-4 ${item.color} rounded-full -translate-x-1/2 mt-6 z-10 shadow-lg ring-4 ring-background`} />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6 hover:border-lime/30 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2" style={{ flexDirection: i % 2 === 0 ? "row-reverse" : "row" }}>
                    <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="text-secondary-foreground" size={16} />
                    </div>
                    <span className="text-gold text-sm font-display tracking-wider">{item.time}</span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
