import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type DescriptionProps = ChildrenProps & {
  className?: string;
};

export const Description = ({ children, className }: DescriptionProps) => {
  return (
    <p className={twMerge("font-satoshi text-xl font-medium text-gray", className)}>{children}</p>
  );
};
