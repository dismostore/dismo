import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
