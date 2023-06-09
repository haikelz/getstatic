import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type HeadingProps = ChildrenProps & {
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={twMerge("text-5xl font-bold leading-[60px] text-darkgrey", className)}>
      {children}
    </h2>
  );
}
