"use client";
import { cn } from "../utils/merge";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}
export const AuroraBackground = ({
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden z-20 rounded-t-[40px] md:rounded-none">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--red-300)_10%,var(--yellow-200)_15%,var(--blue-300)_20%,var(--red-300)_0%,var(--blue-300)_0%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert 
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_80%)]`
          )}
        ></div>
      </div>
      {children}
    </>
  );
};
