import { motion } from "framer-motion";

















import TextType from "./TextType";

const EventCard = ({ event, onSelect }) => {
  const { number, label, title, description, image } = event;

  return (
    <motion.div
      className="w-80 h-[580px] cursor-pointer group"
      onClick={() => onSelect(event)}
      whileHover={{ scale: 1.04, y: -8 }}
      transition={{ duration: 0.3 }}>
      
      <div className="relative w-full h-full rounded-lg border border-primary/40 bg-card overflow-hidden border-glow group-hover:card-glow-hover transition-shadow duration-500">
        {/* Corner ornaments */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/60" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/60" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary/60" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/60" />

        {/* Inner border */}
        <div className="absolute inset-4 border border-primary/20 rounded" />

        {/* Decorative top arcs */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 h-16">
          <svg viewBox="0 0 160 60" className="w-full h-full opacity-30">
            <path d="M20,55 Q80,5 140,55" fill="none" stroke="hsl(270, 80%, 60%)" strokeWidth="0.8" />
            <path d="M35,50 Q80,15 125,50" fill="none" stroke="hsl(270, 80%, 60%)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Number badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="bg-card border border-primary/50 px-4 py-1 mt-1">
            <span className="font-cinzel text-base text-primary font-bold">{number}</span>
          </div>
        </div>

        {/* Dynamic Image Instead of Label */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-10">
          {image ? (
            <div className="w-44 h-44 rounded-lg border-2 border-primary overflow-hidden shadow-[0_0_20px_hsla(var(--primary),0.7)] bg-background/60 flex items-center justify-center">
              <img src={image} alt={title} className="w-full h-full object-contain drop-shadow-md" />
            </div>
          ) : (
            <div className="border border-primary/50 px-6 py-1 flex items-center gap-2">
              <span className="text-primary text-[10px]">◆</span>
              <span className="font-rajdhani text-sm tracking-[0.2em] uppercase text-primary font-semibold">
                {label}
              </span>
              <span className="text-primary text-[10px]">◆</span>
            </div>
          )}
        </div>

        {/* Title & description */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-[280px]">
          <h3 className="font-cinzel text-lg md:text-xl text-foreground font-bold mb-3 text-center text-glow min-h-[1.5em] w-full">
            <TextType 
              text={title} 
              typingSpeed={25} 
              loop={false} 
              startOnVisible={true}
              showCursor={false}
            />
          </h3>
          <div className="font-rajdhani text-muted-foreground text-center text-sm md:text-base leading-relaxed min-h-[3em] w-full">
            <TextType 
              text={description} 
              typingSpeed={25} 
              initialDelay={500}
              loop={false} 
              startOnVisible={true}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>
    </motion.div>);
};

export default EventCard;