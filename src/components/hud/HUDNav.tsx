import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/home" },
  { label: "PLAYIQ AR", href: "/scan" },
  { label: "WORLDS", href: "/worlds" },
  { label: "CHALLENGES", href: "/challenges" },
  { label: "PROJECTS", href: "/showcase" },
  { label: "SHOP", href: "/shop" },
  { label: "COURSE", href: "/course" },
];

export function HUDNav() {
  const location = useLocation();

  return (
    <nav className="relative z-50">
      {/* Main nav container with hex pill shape */}
      <div className="relative mx-auto max-w-4xl">
        {/* Glow effect behind nav */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl" />
        
        {/* Nav bar */}
        <div className="relative glass-panel neon-border rounded-full px-2 py-1">
          {/* Inner glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <ul className="flex items-center justify-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href === "/home" && location.pathname === "/");
              
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 text-xs font-medium tracking-wider transition-all duration-300",
                      "hover:text-primary",
                      isActive 
                        ? "text-primary text-glow-primary" 
                        : "text-foreground/70"
                    )}
                  >
                    {item.label}
                    
                    {/* Laser underline for active state */}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent">
                        <span className="absolute inset-0 blur-sm bg-primary" />
                      </span>
                    )}
                    
                    {/* Spotlight hover effect */}
                    <span className="absolute inset-0 rounded-full bg-primary/0 hover:bg-primary/10 transition-colors duration-300" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
