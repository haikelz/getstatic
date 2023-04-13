import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~/types";

type PrimaryButtonProps = ChildrenProps & {
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, className, variant }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        "font-satoshi text-base font-bold text-[#F5F4F7]",
        "rounded-lg transition-all ease-in-out",
        variant === "primary"
          ? "bg-primary hover:bg-orange-700"
          : "bg-secondary hover:bg-neutral-200",
        className
      )}
    >
      {children}
    </button>
  );
}
