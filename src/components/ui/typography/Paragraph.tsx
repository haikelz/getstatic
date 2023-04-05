import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type ParagraphProps = ChildrenProps & {
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={twMerge("font-satoshi font-medium text-gray", className)}>{children}</p>;
};
