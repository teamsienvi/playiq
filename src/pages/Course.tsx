import { NebulaScene, HUDNav, HUDPanel, HUDProgressBar, HoloIcon, LockOverlay } from "@/components/hud";
import { BookOpen, Play, CheckCircle, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  { id: 1, title: "Introduction to PlayIQ", lessons: 5, completed: 5, unlocked: true },
  { id: 2, title: "Building Foundations", lessons: 8, completed: 3, unlocked: true },
  { id: 3, title: "Pattern Recognition", lessons: 6, completed: 0, unlocked: true },
  { id: 4, title: "Advanced Structures", lessons: 10, completed: 0, unlocked: false },
  { id: 5, title: "Creative Challenges", lessons: 7, completed: 0, unlocked: false },
];

const Course = () => {
  return (
    <NebulaScene>
      <div className="min-h-screen flex flex-col">
        <header className="pt-6 px-4">
          <HUDNav />
        </header>

        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              PlayIQ <span className="text-primary text-glow-primary">Course</span>
            </h1>
            <p className="text-muted-foreground">
              Master the blocks with guided lessons
            </p>
          </div>

          {/* AI Companion Link */}
          <div className="max-w-3xl mx-auto mb-8">
            <Link to="/course/ai">
              <HUDPanel className="hover:scale-[1.02] transition-transform cursor-pointer" glowColor="secondary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">AI Course Companion</h3>
                    <p className="text-sm text-muted-foreground">Get help and ask questions about your lessons</p>
                  </div>
                </div>
              </HUDPanel>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <LockOverlay 
                key={module.id} 
                isLocked={!module.unlocked}
                message="Complete previous modules to unlock"
              >
                <Link to={`/course/module/${module.id}`}>
                  <HUDPanel 
                    variant="small" 
                    className="hover:scale-[1.02] transition-transform cursor-pointer"
                    glowColor={module.completed === module.lessons ? "accent" : "primary"}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <HoloIcon 
                          icon={module.completed === module.lessons ? CheckCircle : (module.completed > 0 ? Play : BookOpen)} 
                          label="" 
                          color={module.completed === module.lessons ? "accent" : "primary"}
                          size="sm"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground">Module {index + 1}</span>
                          {module.completed === module.lessons && (
                            <span className="text-xs text-success font-medium">Completed</span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{module.title}</h3>
                        <HUDProgressBar 
                          label="Progress" 
                          value={module.completed} 
                          max={module.lessons}
                          size="sm"
                          color={module.completed === module.lessons ? "accent" : "primary"}
                        />
                      </div>
                    </div>
                  </HUDPanel>
                </Link>
              </LockOverlay>
            ))}
          </div>
        </main>
      </div>
    </NebulaScene>
  );
};

export default Course;
