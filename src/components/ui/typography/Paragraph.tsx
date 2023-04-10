import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type ParagraphProps = ChildrenProps & {
  className?: string;
};

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={twMerge("font-satoshi text-base font-medium text-gray", className)}>{children}</p>
  );
}
