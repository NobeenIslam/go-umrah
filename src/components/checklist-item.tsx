import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  id: string;
  text: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onDelete?: () => void;
  className?: string;
  variant?: "default" | "gradient";
}

export function ChecklistItem({
  id,
  text,
  checked,
  onCheckedChange,
  onDelete,
  className,
  variant = "default",
}: ChecklistItemProps) {
  const toggle = () => onCheckedChange(!checked);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-xl p-4 transition-all duration-300 hover:shadow-md",
        variant === "gradient"
          ? "bg-gradient-teal border border-white/20 shadow-sm"
          : "bg-card border border-border",
        className
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          onClick={(e) => e.stopPropagation()}
        />
        <span
          className={cn(
            "flex-1 truncate text-sm font-medium leading-relaxed transition-all duration-300",
            checked
              ? "line-through text-muted-foreground opacity-70"
              : "text-foreground hover:text-primary"
          )}
          title={text}
        >
          {text}
        </span>
      </div>

      {onDelete ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          aria-label="Delete item"
          className="text-destructive hover:text-destructive/90"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}
