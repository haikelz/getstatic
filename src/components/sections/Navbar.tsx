import { navbarItemList } from "~/lib/utils/data";
import { Button } from "../ui/buttons";
import Logo from "/images/logo-icon.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full max-w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-3">
          <div className="h-fit rounded-full bg-secondary p-3">
            <img src={Logo} alt="logo" />
          </div>
          <span className="text-2xl font-bold">Getstatic</span>
        </div>
        <ul className="flex space-x-8">
          {navbarItemList.map((item) => (
            <li key={item.id}>
              <span className="font-satoshi font-medium text-black">{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="space-x-8">
          <span>Contact</span>
          <button type="button" aria-label="login">
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
