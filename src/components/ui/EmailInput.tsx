import { twJoin } from "tailwind-merge";

export const EmailInput = () => {
  return (
    <input
      type="email"
      placeholder="Your Email"
      className={twJoin(
        "rounded-md border-2 border-cultured",
        "px-4 py-3",
        "transition-all ease-in-out",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      )}
    />
  );
};