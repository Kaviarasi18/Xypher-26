import { motion } from "framer-motion";
import EventCard from "./EventCard";
import SmokeEffect from "./SmokeEffect";

const events = [
  {
    number: "I",
    label: "Technical",
    title: "Code Forge",
    description: "Competitive coding, hackathons, and algorithmic battles that test your technical mastery",
    backDescription: "Push your limits with intense coding challenges, system design battles, and hands-on workshops led by industry veterans. Prizes await the worthy.",
  },
  {
    number: "II",
    label: "Non-Tech",
    title: "Creative Arena",
    description: "Design thinking, management games, and creative showcases beyond the code",
    backDescription: "Unleash your creativity through design sprints, case studies, quizzes, and team challenges. No code required — only vision and strategy.",
  },
  {
    number: "III",
    label: "Webinar",
    title: "Digital Summit",
    description: "Expert talks, panel discussions, and live Q&A sessions with industry leaders",
    backDescription: "Join virtual sessions with tech pioneers sharing insights on AI, blockchain, cloud, and the future of technology. Network globally.",
  },
];

const EventSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_40%_8%)_0%,_hsl(270_20%_4%)_70%)]" />

      {/* Section header */}
      <motion.div
        className="relative z-20 text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
          <span className="text-primary text-xs">◆</span>
          <div className="border border-primary/40 px-6 py-1.5">
            <span className="font-rajdhani text-xs tracking-[0.3em] uppercase text-primary/80">
              Choose Your Path
            </span>
          </div>
          <span className="text-primary text-xs">◆</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
        </div>
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground text-glow">
          Event Categories
        </h2>
        <p className="font-rajdhani text-muted-foreground mt-3 text-lg">
          Hover to reveal what awaits within
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-20 flex flex-wrap justify-center gap-8 md:gap-12 px-4">
        {events.map((e, i) => (
          <motion.div
            key={e.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <EventCard {...e} />
          </motion.div>
        ))}
      </div>

      {/* Smoke */}
      <SmokeEffect />
    </section>
  );
};

export default EventSection;
