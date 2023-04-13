import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { navbarItemList } from "~/lib/utils/data";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={twJoin(
          "fixed top-0 z-10",
          "flex w-full max-w-full items-center justify-center",
          "bg-white/80 backdrop-blur-md",
          "min-[923px]:sticky"
        )}
      >
        <div
          className={twJoin(
            "hidden w-full max-w-7xl",
            "items-center justify-between p-4",
            "min-[923px]:flex"
          )}
        >
          <a href="#top">
            <div className="flex items-center justify-center space-x-3">
              <div className="h-fit rounded-full bg-secondary p-3">
                <img className="h-5 w-5" src="/images/logo-icon.svg" alt="logo" loading="eager" />
              </div>
              <span className="text-2xl font-bold">Getstatic</span>
            </div>
          </a>
          <ul className="flex space-x-8">
            {navbarItemList.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={twJoin(
                    "cursor-pointer font-satoshi font-medium text-black",
                    "decoration-2 transition-all ease-in-out",
                    "hover:underline hover:underline-offset-4"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-x-8">
            <a
              href="#top"
              className={twJoin(
                "cursor-pointer font-satoshi font-medium text-black",
                "decoration-2 transition-all ease-in-out",
                "hover:underline hover:underline-offset-4"
              )}
            >
              Contact
            </a>
            <a
              href="#top"
              className={twJoin(
                "cursor-pointer font-satoshi font-medium text-black",
                "decoration-2 transition-all ease-in-out",
                "hover:underline hover:underline-offset-4"
              )}
            >
              Login
            </a>
            <Button
              variant="secondary"
              className="bg-secondary px-4 py-3 text-primary"
              aria-label="sign up"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div
          className={twJoin(
            "flex w-full flex-col justify-between",
            "px-4 py-2.5",
            "min-[923px]:hidden"
          )}
        >
          <div className="flex w-full justify-between">
            <div className="h-fit rounded-full bg-secondary p-3">
              <img className="h-5 w-5" src="/images/logo-icon.svg" alt="logo" loading="eager" />
            </div>
            <button
              type="button"
              aria-label="close and open navbar"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon /> : <BarIcon />}
            </button>
          </div>
          {isOpen ? (
            <div className="mt-4 flex w-full flex-col">
              <ul className="space-y-4">
                {navbarItemList.map((value) => (
                  <li key={value.id}>
                    <a
                      className={twJoin(
                        "cursor-pointer font-satoshi font-medium text-black",
                        "decoration-2 transition-all ease-in-out",
                        "hover:underline hover:underline-offset-4"
                      )}
                      href={value.href}
                    >
                      {value.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className={twJoin(
                      "cursor-pointer font-satoshi font-medium text-black",
                      "decoration-2 transition-all ease-in-out",
                      "hover:underline hover:underline-offset-4"
                    )}
                    href="#top"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className={twJoin(
                      "cursor-pointer font-satoshi font-medium text-black",
                      "decoration-2 transition-all ease-in-out",
                      "hover:underline hover:underline-offset-4"
                    )}
                    href="#top"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <Button variant="secondary" className="px-4 py-3.5 text-primary">
                    Sign Up
                  </Button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
