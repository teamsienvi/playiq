import { 
  NebulaScene, 
  HUDNav, 
  HUDPanel, 
  HUDProgressBar, 
  HoloIcon, 
  PlatformButton 
} from "@/components/hud";
import { Pyramid, Castle, Ghost, Shield, Scan, QrCode } from "lucide-react";
import dragonEgg from "@/assets/dragon-egg.png";
import crystalCluster from "@/assets/crystal-cluster.png";

const Home = () => {
  return (
    <NebulaScene>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="pt-6 px-4">
          <HUDNav />
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Top Section: Logo + Crystals + Hero Panel */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left: Logo and Crystal Cluster */}
            <div className="flex items-center justify-center gap-6">
              {/* Logo */}
              <div className="relative">
                <h1 className="text-5xl md:text-6xl font-bold tracking-wider text-glow-primary">
                  <span className="text-primary">PLAY</span>
                  <span className="text-foreground">IQ</span>
                </h1>
                {/* Glow effect under logo */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm" />
              </div>
              
              {/* Crystal Cluster */}
              <div className="relative animate-float">
                <img 
                  src={crystalCluster} 
                  alt="Energy Crystal" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_hsl(185,100%,50%,0.5)]"
                />
                {/* Glow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-primary/40 blur-lg rounded-full" />
              </div>
            </div>

            {/* Right: Hero Panel with Dragon Egg */}
            <HUDPanel variant="hero" className="relative overflow-visible">
              <div className="flex items-center gap-6">
                {/* Dragon Egg */}
                <div className="relative flex-shrink-0 animate-float" style={{ animationDelay: '0.5s' }}>
                  <img 
                    src={dragonEgg} 
                    alt="Dragon Egg" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_hsl(185,100%,60%,0.4)]"
                  />
                  {/* Circular glow platform */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-3 bg-primary/30 blur-xl rounded-full" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Your First
                    <br />
                    <span className="text-primary text-glow-primary">Character Awaits</span>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set in or hold dragon with your pulse and hoist/guide dragon egg.
                  </p>
                  <PlatformButton size="sm" variant="primary">
                    Start Now
                  </PlatformButton>
                </div>
              </div>
            </HUDPanel>
          </div>

          {/* Middle Section: Progress Panel + Hologram Icons */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Progress Panel */}
            <HUDPanel variant="small" className="lg:col-span-1">
              <div className="space-y-4">
                <HUDProgressBar 
                  label="Progress Bars" 
                  value={50} 
                  max={1100} 
                  color="primary"
                />
                <HUDProgressBar 
                  label="Challenge" 
                  value={10} 
                  max={10} 
                  color="accent"
                />
              </div>
            </HUDPanel>

            {/* Hologram Icons Grid */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                <HoloIcon 
                  icon={Pyramid} 
                  label="Pyramid Power" 
                  color="tertiary"
                />
                <HoloIcon 
                  icon={Castle} 
                  label="Tower of Strength" 
                  color="secondary"
                />
                <HoloIcon 
                  icon={Ghost} 
                  label="Dceen ilges" 
                  color="secondary"
                />
                <HoloIcon 
                  icon={Shield} 
                  label="Challenges" 
                  color="accent"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: Platform CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <PlatformButton size="lg" variant="primary">
              <span className="flex items-center gap-3">
                <Scan className="w-5 h-5" />
                Start Scanning
              </span>
            </PlatformButton>
            
            <PlatformButton size="md" variant="secondary">
              <span className="flex items-center gap-3">
                <QrCode className="w-5 h-5" />
                Scan Pattern
              </span>
            </PlatformButton>
          </div>
        </main>

        {/* Footer spacer */}
        <div className="h-16" />
      </div>
    </NebulaScene>
  );
};

export default Home;
