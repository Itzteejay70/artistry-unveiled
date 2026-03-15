import {
  Palette,
  Music,
  Users,
  Sparkles,
  PartyPopper,
  GraduationCap,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const schedule = [
  {
    time: "11:00 AM",
    title: "Opening Ceremony",
    desc: "Welcome guests and kick off the festival with an energetic opening celebration.",
    icon: PartyPopper,
    color: "bg-gold",
  },
  {
    time: "11:30 AM",
    title: "Outdoor Art Exhibition",
    desc: "Explore curated art displays and creative works throughout the festival space.",
    icon: Palette,
    color: "bg-lime",
  },
  {
    time: "12:00 PM",
    title: "Live Performances",
    desc: "Enjoy music, spoken word, and live cultural performances during the day.",
    icon: Music,
    color: "bg-primary",
  },
  {
    time: "1:00 PM",
    title: "Creative Workshops",
    desc: "Join hands-on art activities, demonstrations, and interactive creative sessions.",
    icon: GraduationCap,
    color: "bg-gold",
  },
  {
    time: "2:00 PM",
    title: "Live Art Sessions",
    desc: "Watch creatives bring their ideas to life through live artistic expression.",
    icon: Sparkles,
    color: "bg-lime",
  },
  {
    time: "3:00 PM",
    title: "Closing Celebration",
    desc: "Wrap up the event with final highlights and a shared community moment.",
    icon: Users,
    color: "bg-primary",
  },
];

const ScheduleSection = () => (
  <section
    id="schedule"
    className="relative overflow-hidden bg-muted/30 py-24 md:py-32"
  >
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-4 torn-edge bg-background" />
    <div className="absolute -right-10 top-1/4 h-48 w-48 paint-blob bg-purple/5 pointer-events-none" />
    <div className="absolute -left-10 bottom-1/4 h-40 w-40 paint-blob bg-lime/5 pointer-events-none" />

    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-block rounded-full border border-lime/30 bg-lime/15 px-4 py-1.5 mb-4">
          <span className="text-lime font-body text-sm tracking-[0.2em] uppercase">
            Event Day
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
          Event Schedule
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          May 15, 2026 • 11AM to 3PM
        </p>

        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-lime via-gold to-purple mx-auto" />
      </AnimatedSection>

      <div className="relative mx-auto max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime via-gold to-purple md:left-1/2 md:-translate-x-1/2" />

        {schedule.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div
                className={`relative mb-10 flex items-start md:mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 mt-8 h-4 w-4 -translate-x-1/2 rounded-full ${item.color} z-10 shadow-lg ring-4 ring-background md:left-1/2`}
                />

                {/* Spacer for mobile timeline */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-lime/30 hover:shadow-lg hover:shadow-purple/5">
                    <div
                      className={`mb-3 flex items-center gap-3 ${
                        isEven ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <item.icon
                          className="text-secondary-foreground"
                          size={18}
                        />
                      </div>

                      <span className="font-display text-sm tracking-wider text-gold">
                        {item.time}
                      </span>
                    </div>

                    <h3
                      className={`font-heading text-xl text-foreground mb-2 ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm text-muted-foreground leading-relaxed ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ScheduleSection;