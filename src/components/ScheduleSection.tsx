import { Palette, Music, Users, Mic2, PartyPopper, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const schedule = [
  { time: "10:00 AM", title: "Opening Ceremony", desc: "Welcome address and ribbon cutting with live drumming", icon: PartyPopper, day: "Day 1" },
  { time: "11:30 AM", title: "Artist Showcases", desc: "Live painting demonstrations by featured artists", icon: Palette, day: "Day 1" },
  { time: "2:00 PM", title: "Workshops", desc: "Pottery, bead making, and oil diffuser crafting sessions", icon: GraduationCap, day: "Day 1" },
  { time: "5:00 PM", title: "Live Performances", desc: "Music and spoken word performances on the main stage", icon: Music, day: "Day 2" },
  { time: "11:00 AM", title: "Panel Discussions", desc: "Art & Community: Building creative economies in Jamaica", icon: Mic2, day: "Day 2" },
  { time: "6:00 PM", title: "Closing Event", desc: "Award ceremony, final showcase, and afterparty", icon: Users, day: "Day 3" },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-24 md:py-32 bg-muted/30">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-lime font-body text-sm tracking-[0.2em] uppercase mb-4">What's Happening</p>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground">Event Schedule</h2>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {schedule.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-lime rounded-full -translate-x-1/2 mt-6 z-10 shadow-lg shadow-lime/50" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs font-body text-purple uppercase tracking-widest">{item.day}</span>
                <div className="glass-card rounded-xl p-6 mt-2">
                  <div className="flex items-center gap-3 mb-2" style={{ flexDirection: i % 2 === 0 ? "row-reverse" : "row" }}>
                    <item.icon className="text-lime flex-shrink-0" size={20} />
                    <span className="text-lime text-sm font-body">{item.time}</span>
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
