import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import TextType from "./TextType";
import ctfImg from "@/assets/CTF.png";
import uiBlindfoldImg from "@/assets/ui_blindfold.png";
import expoImg from "@/assets/project_expo.png";
import powerbiImg from "@/assets/power_bi_workshop.png";
import auctionImg from "@/assets/tech_auction.png";
import huntImg from "@/assets/technical_treasurehunt.png";
import appDevImg from "@/assets/app_dev.png";
import devopsImg from "@/assets/dev_ops.png";

const events = [
  {
    number: "I",
    label: "CTF",
    title: "Cyber CTF",
    image: ctfImg,
    description: "Solve cybersecurity challenges in cryptography, web security, and forensics",
    detailTitle: "Capture The Flag",
    detailDescription: "A cybersecurity challenge where participants solve technical problems related to cryptography, web security, and forensics.",
    details: [
      { label: "Duration", value: "6 hours" },
      { label: "Team Size", value: "3-4 members" },
      { label: "Registration Fee", value: "₹250 (IEEE) / ₹300 (Non-IEEE)" },
      { label: "Expected Teams", value: "20" },
      { label: "Prize Pool", value: "₹6000" }
    ]
  },
  {
    number: "II",
    label: "Technical",
    title: "UI Blindfolded",
    image: uiBlindfoldImg,
    description: "One designs verbally, one codes blindly — testing communication and UI skills",
    detailTitle: "Building UI Blindfolded",
    detailDescription: "A collaborative challenge where one teammate designs a Ul and describes it verbally while the other codes it without seeing the design, testing communication and implementation accuracy.",
    details: [
      { label: "Duration", value: "3 hours" },
      { label: "Team Size", value: "2 members" },
      { label: "Registration Fee", value: "₹125 (IEEE) / ₹175 (Non-IEEE)" },
      { label: "Expected Teams", value: "20" },
      { label: "Prize Pool", value: "₹2500" }
    ]
  },
  {
    number: "III",
    label: "Technical",
    title: "Project Expo",
    image: expoImg,
    description: "Showcase innovative real-world technical projects demonstrating practical applications",
    detailTitle: "Project Expo",
    detailDescription: "An exhibition platform where participants present innovative technical projects demonstrating practical applications.",
    details: [
      { label: "Duration", value: "3 hours" },
      { label: "Registration Fee", value: "₹175 (IEEE) / ₹150 (Non-IEEE)" },
      { label: "Expected Teams", value: "20" },
      { label: "Prize Pool", value: "₹3000" }
    ]
  },
  {
    number: "IV",
    label: "Workshop",
    title: "Power BI Workshop",
    image: powerbiImg,
    description: "Hands-on workshop introducing interactive dashboards using Power BI",
    detailTitle: "Power BI Workshop",
    detailDescription: "A hands-on workshop introducing participants to creating interactive dashboards and meaningful insights using Power BI.",
    details: [
      { label: "Duration", value: "2 hours" },
      { label: "Registration Fee", value: "Free (IEEE) / ₹150 (Non-IEEE)" },
      { label: "Expected Participants", value: "100" },
      { label: "Speaker", value: "Alumni" }
    ]
  },
  {
    number: "V",
    label: "Technical",
    title: "Mystery Tech Auction",
    image: auctionImg,
    description: "Bid for tech tools and build a project under constraints",
    detailTitle: "Mystery Tech Auction",
    detailDescription: "Teams are given a fixed amount of virtual money and must bid in an auction for tech resources like APIs, datasets, cloud credits, or tools; after the auction, they must build a project using only what they purchased, testing strategy, decision-making, and creativity under constraints.",
    details: [
      { label: "Duration", value: "6 hours" },
      { label: "Team Size", value: "2-3 members" },
      { label: "Registration Fee", value: "₹250 (IEEE) / ₹300 (Non-IEEE)" },
      { label: "Expected Teams", value: "15" },
      { label: "Prize Pool", value: "₹6000" }
    ]
  },
  {
    number: "VI",
    label: "Technical",
    title: "Treasure Hunt",
    image: huntImg,
    description: "Follow technical clues and puzzles to progress through stages",
    detailTitle: "Technical Treasure Hunt",
    detailDescription: "A problem-solving event where participants follow technical clues and puzzles to progress through multiple stages collaboratively.",
    details: [
      { label: "Duration", value: "3 hours" },
      { label: "Team Size", value: "2-3 members" },
      { label: "Registration Fee", value: "₹250 (IEEE) / ₹300 (Non-IEEE)" },
      { label: "Expected Teams", value: "15" },
      { label: "Prize Pool", value: "₹2500" }
    ]
  },
  {
    number: "VII",
    label: "Technical",
    title: "App Development",
    image: appDevImg,
    description: "Design and develop applications that address real-world problems",
    detailTitle: "App Development",
    detailDescription: "An event focused on designing and developing functional applications that address real-world problems using technical skills.",
    details: [
      { label: "Team Size", value: "2-3 members" },
      { label: "Registration Fee", value: "₹125 (IEEE) / ₹175 (Non-IEEE)" },
      { label: "Expected Teams", value: "20" },
      { label: "Prize Pool", value: "₹2500" }
    ]
  },
  {
    number: "VIII",
    label: "Workshop",
    title: "DevOps Workshop",
    image: devopsImg,
    description: "Learn practical DevOps concepts, integration, and deployment",
    detailTitle: "DevOps Workshop",
    detailDescription: "A practical workshop introducing participants to DevOps concepts including integration and deployment workflows.",
    details: [
      { label: "Duration", value: "2 hours" },
      { label: "Registration Fee", value: "Free (IEEE) / ₹50 (Non-IEEE)" },
      { label: "Expected Participants", value: "150" },
      { label: "Speaker", value: "Alumni" }
    ]
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
              <TextType 
                text="Choose Your Path" 
                as="span"
                className="font-rajdhani text-xs tracking-[0.3em] uppercase text-primary/80"
                typingSpeed={25}
                loop={false}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
            <span className="text-primary text-xs">◆</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground text-glow min-h-[1.2em]">
            <TextType 
              text="Event Categories" 
              typingSpeed={25}
              loop={false}
              showCursor={false}
            />
          </h2>
          <div className="font-rajdhani text-muted-foreground mt-3 text-lg min-h-[1.5em]">
            <TextType 
              text="Click a card to reveal what awaits within" 
              typingSpeed={25}
              initialDelay={1000}
              loop={false}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </motion.div>

        {/* Categorized Cards */}
        <div className="w-full relative z-20">
          {Object.entries(events.reduce((acc, event) => {
            if (!acc[event.label]) acc[event.label] = [];
            acc[event.label].push(event);
            return acc;
          }, {})).map(([category, categoryEvents]) => (
            <div key={category} className="mb-20 last:mb-0">
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-primary mb-10 text-center text-glow flex items-center justify-center gap-4 min-h-[1.2em]">
                <span className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-primary/60" />
                <TextType 
                  text={category} 
                  typingSpeed={25} 
                  loop={false} 
                  showCursor={false}
                />
                <span className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-primary/60" />
              </h3>
              <div className="flex flex-wrap justify-center gap-10 lg:gap-16 px-4 max-w-[1300px] mx-auto w-full">
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

        {/* Smoke moved to main layout */}
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