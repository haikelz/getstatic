import { twJoin } from "tailwind-merge";
import { navbarItemList } from "~/lib/utils/data";
import { Button } from "../ui/Button";
import Logo from "/images/logo-icon.svg";

const Navbar = () => {
  return (
    <nav
      className={twJoin(
        "sticky top-0 z-10",
        "flex w-full max-w-full items-center justify-center",
        "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between py-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="h-fit rounded-full bg-secondary p-3">
            <img src={Logo} alt="logo" />
          </div>
          <span className="text-2xl font-bold">Getstatic</span>
        </div>
        <ul className="flex space-x-8">
          {navbarItemList.map((item) => (
            <li key={item.id}>
              <span
                className={twJoin(
                  "cursor-pointer font-satoshi font-medium text-black",
                  "transition-all ease-in-out",
                  "decoration-2 hover:underline hover:underline-offset-4"
                )}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="space-x-8">
          <span
            className={twJoin(
              "cursor-pointer font-satoshi font-medium text-black",
              "transition-all ease-in-out",
              "decoration-2 hover:underline hover:underline-offset-4"
            )}
          >
            Contact
          </span>
          <button
            className={twJoin(
              "cursor-pointer font-satoshi font-medium text-black",
              "transition-all ease-in-out",
              "decoration-2 hover:underline hover:underline-offset-4"
            )}
            type="button"
            aria-label="login"
          >
            Login
          </button>
          <Button
            variant="secondary"
            className="bg-secondary px-4 py-3 text-primary"
            aria-label="sign up"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
