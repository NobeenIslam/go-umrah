import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ImageCardProps = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  ratio?: number; // width/height, e.g. 16/9
  badge?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode; // optional custom content instead of src
};

export function ImageCard({
  src,
  alt,
  title,
  description,
  ratio = 16 / 9,
  badge,
  className,
  imageClassName,
  children,
}: ImageCardProps) {
  const isDecorative = !alt && !title && !description;

  return (
    <Card className={cn("overflow-hidden p-0", className)} aria-label={title}>
      <div>
        <AspectRatio ratio={ratio}>
          {src ? (
            <img
              src={src}
              alt={alt ?? ""}
              aria-hidden={isDecorative}
              className={cn("h-full w-full object-cover", imageClassName)}
              loading="lazy"
              decoding="async"
            />
          ) : children ? (
            <div
              className={cn(
                "grid h-full w-full place-items-center bg-muted",
                imageClassName
              )}
            >
              {children}
            </div>
          ) : (
            <div className="h-full w-full bg-muted" aria-hidden="true" />
          )}
        </AspectRatio>
      </div>

      {title || description || badge ? (
        <div className={cn("flex items-start gap-3 px-6 py-4")}>
          <div className="min-w-0">
            {title ? (
              <h3 className="text-base font-semibold leading-tight text-foreground">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          {badge ? <div className="ml-auto shrink-0">{badge}</div> : null}
        </div>
      ) : null}
    </Card>
  );
}
