import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";

import EventDetail from "./EventDetail";
import SmokeEffect from "./SmokeEffect";

const events = [
{
  number: "I",
  label: "Capture The Flag",
  title: "Cyber CTF",
  description: "Solve cybersecurity challenges in cryptography, web security, and forensics",
  backDescription: "A fast-paced hacking competition testing real-world security skills.",
  detailTitle: "Capture The Flag",
  detailDescription: "Duration: 6 hours | Team Size: 3–4 | Expected Teams: 20",
  detailTagline: "₹250 / ₹300 • Prize ₹6000"
},
{
  number: "II",
  label: "Technical",
  title: "UI Blindfolded",
  description: "One designs, one codes — without seeing the UI",
  backDescription: "A communication-heavy UI challenge testing accuracy and teamwork.",
  detailTitle: "Building UI Blindfolded",
  detailDescription: "Duration: 3 hours | Team Size: 2 | Expected Teams: 20",
  detailTagline: "₹125 / ₹175 • Prize ₹2500"
},
{
  number: "III",
  label: "Technical",
  title: "Project Expo",
  description: "Showcase innovative real-world technical projects",
  backDescription: "Present your ideas and compete with practical implementations.",
  detailTitle: "Project Expo",
  detailDescription: "Duration: 3 hours | Expected Teams: 20",
  detailTagline: "₹175 / ₹150 • Prize ₹3000"
},
{
  number: "IV",
  label: "Workshop",
  title: "Power BI Workshop",
  description: "Learn to build dashboards and insights using Power BI",
  backDescription: "Hands-on session on data visualization and analytics.",
  detailTitle: "Data Visualization using Power BI",
  detailDescription: "Duration: 2 hours | Expected Participants: 150 | Speaker: Alumni",
  detailTagline: "Free / ₹50"
},
{
  number: "V",
  label: "Technical",
  title: "Mystery Tech Auction",
  description: "Bid for tools and build under constraints",
  backDescription: "Strategy meets development in this unique auction-based challenge.",
  detailTitle: "Mystery Tech Auction",
  detailDescription: "Duration: 6 hours | Team Size: 2–3 | Expected Teams: 15",
  detailTagline: "₹250 / ₹300 • Prize ₹6000"
},
{
  number: "VI",
  label: "Technical",
  title: "Technical Treasure Hunt",
  description: "Solve clues and puzzles across multiple stages",
  backDescription: "A fun and challenging technical hunt testing logic and teamwork.",
  detailTitle: "Technical Treasure Hunt",
  detailDescription: "Duration: 3 hours | Team Size: 2–3 | Expected Teams: 15",
  detailTagline: "₹250 / ₹300 • Prize ₹2500"
},
{
  number: "VII",
  label: "Technical",
  title: "App Development",
  description: "Build real-world applications solving practical problems",
  backDescription: "Design and develop functional apps under constraints.",
  detailTitle: "App Development",
  detailDescription: "Team Size: 2–3 | Expected Teams: 20",
  detailTagline: "₹125 / ₹175 • Prize ₹2500"
},
{
  number: "VIII",
  label: "Workshop",
  title: "DevOps Workshop",
  description: "Learn CI/CD, deployment, and DevOps fundamentals",
  backDescription: "Practical introduction to modern development workflows.",
  detailTitle: "DevOps Workshop",
  detailDescription: "Duration: 2 hours | Expected Participants: 150 | Speaker: Alumni",
  detailTagline: "Free / ₹50"
}
];


const EventSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
        {/* Background radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_40%_8%)_0%,_hsl(270_20%_4%)_70%)]" />

        {/* Section header */}
        <motion.div
          className="relative z-20 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
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
            Click a card to reveal what awaits within
          </p>
        </motion.div>

        {/* Categorized Cards */}
        <div className="w-full relative z-20">
          {Object.entries(events.reduce((acc, event) => {
            if (!acc[event.label]) acc[event.label] = [];
            acc[event.label].push(event);
            return acc;
          }, {})).map(([category, categoryEvents]) => (
            <div key={category} className="mb-20 last:mb-0">
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-primary mb-10 text-center text-glow flex items-center justify-center gap-4">
                <span className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-primary/60" />
                {category}
                <span className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-primary/60" />
              </h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 max-w-[1200px] mx-auto w-full">
                {categoryEvents.map((e, i) => (
                  <motion.div
                    key={`${e.number}-${i}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}>
                    <EventCard event={e} onSelect={setSelectedEvent} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Smoke */}
        <SmokeEffect density={70} heightClass="h-96" />
      </section>

      {/* Detail overlay */}
      <AnimatePresence>
        {selectedEvent &&
        <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} />
        }
      </AnimatePresence>
    </>);

};

export default EventSection;