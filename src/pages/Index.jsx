import EventSection from "@/components/EventSection";
import SmokeEffect from "@/components/SmokeEffect";

const Index = () => {
  return (
    <main className="bg-background min-h-screen relative overflow-hidden">
      <EventSection />
      
      {/* Full page smoke overlay at bottom */}
      <div className="fixed bottom-0 left-0 w-full h-screen pointer-events-none z-0">
        <SmokeEffect density={50} heightClass="h-screen" />
      </div>
    </main>
  );
};

export default Index;