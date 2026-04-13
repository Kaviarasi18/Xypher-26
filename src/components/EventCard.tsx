import { useState } from "react";
import { motion } from "framer-motion";

interface EventCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
  backDescription: string;
}

const EventCard = ({ number, label, title, description, backDescription }: EventCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-80 h-[440px] cursor-pointer perspective-[1200px]"
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-lg border border-primary/40 bg-card overflow-hidden border-glow"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Corner ornaments */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/60" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/60" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary/60" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/60" />

          {/* Inner border */}
          <div className="absolute inset-4 border border-primary/20 rounded" />

          {/* Number badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0">
            <div className="bg-card border border-primary/50 px-5 py-2 mt-1">
              <span className="font-cinzel text-lg text-primary font-bold">{number}</span>
            </div>
          </div>

          {/* Label */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <div className="border border-primary/50 px-6 py-1.5 flex items-center gap-2">
              <span className="text-primary text-[10px]">◆</span>
              <span className="font-rajdhani text-sm tracking-[0.2em] uppercase text-primary font-semibold">
                {label}
              </span>
              <span className="text-primary text-[10px]">◆</span>
            </div>
          </div>

          {/* Title & description */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-16">
            <h3 className="font-cinzel text-xl text-foreground font-bold mb-3 text-center text-glow">
              {title}
            </h3>
            <p className="font-rajdhani text-muted-foreground text-center text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-lg border border-accent/50 overflow-hidden card-glow-hover"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(180deg, hsl(270 15% 8%) 0%, hsl(280 40% 12%) 50%, hsl(270 15% 8%) 100%)" }}
        >
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent/60" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/60" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent/60" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent/60" />
          <div className="absolute inset-4 border border-accent/20 rounded" />

          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="border border-accent/40 p-1.5 mb-6">
              <div className="w-8 h-8 border border-accent/60 flex items-center justify-center">
                <span className="text-accent text-xs">✦</span>
              </div>
            </div>
            <p className="font-rajdhani text-foreground text-center text-base leading-relaxed mb-8">
              {backDescription}
            </p>
            <button className="border border-primary/60 px-8 py-2.5 rounded-full font-rajdhani uppercase tracking-[0.15em] text-sm text-primary hover:bg-primary/10 transition-colors border-glow">
              Explore
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
