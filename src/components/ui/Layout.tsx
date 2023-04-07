import { ChildrenProps } from "~/types";
import { twJoin } from "tailwind-merge";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className={twJoin("container max-w-full", "dark:bg-gray-900 bg-white dark:text-white")}>
      <main className="flex w-full">{children}</main>
    </div>
  );
};

export default Layout;