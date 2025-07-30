import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, MessageSquare, Bug, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Mode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const modes: Mode[] = [
  {
    id: "code",
    title: "Code Generator",
    description: "Generate, debug, and optimize code in any language",
    icon: <Code2 className="h-6 w-6" />,
    gradient: "from-primary to-primary/80",
  },
  {
    id: "chat",
    title: "General Assistant",
    description: "Get answers and insights on any topic",
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-muted-foreground to-muted-foreground/80",
  },
  {
    id: "debug",
    title: "Debug Helper",
    description: "Identify and fix issues in your code",
    icon: <Bug className="h-6 w-6" />,
    gradient: "from-destructive to-destructive/80",
  },
  {
    id: "enhance",
    title: "Code Enhancer",
    description: "Improve performance and best practices",
    icon: <Sparkles className="h-6 w-6" />,
    gradient: "from-accent-foreground to-accent-foreground/80",
  },
];

interface ModeSelectorProps {
  selectedMode: string;
  onModeSelect: (mode: string) => void;
  className?: string;
}

export function ModeSelector({ selectedMode, onModeSelect, className }: ModeSelectorProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {modes.map((mode) => (
        <Card
          key={mode.id}
          className={cn(
            "relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg border-2",
            selectedMode === mode.id ? "border-primary shadow-elegant" : "border-border hover:border-primary/50"
          )}
          onClick={() => onModeSelect(mode.id)}
        >
          <div className="p-6">
            <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4 text-white", mode.gradient)}>
              {mode.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{mode.title}</h3>
            <p className="text-muted-foreground text-sm">{mode.description}</p>
            {selectedMode === mode.id && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}