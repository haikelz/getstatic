import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type PrimaryButtonProps = ChildrenProps & {
  className?: string;
  variant?: "primary" | "secondary";
};

export const Button = ({ children, className, variant }: PrimaryButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "font-abeezee text-[16px] leading-[19px] text-white",
        "rounded-md transition-all ease-in-out",
        variant === "primary"
          ? "bg-primary hover:bg-orange-700"
          : "bg-secondary hover:bg-neutral-200",
        className
      )}
    >
      {children}
    </button>
  );
};
