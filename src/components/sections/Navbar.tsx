/**
 * TODO: open close animation navbar
 * - Responsive design
 */

import { lazy, useState } from "react";
import { twJoin } from "tailwind-merge";
import { navbarItemList } from "~/lib/utils/data";
import Button from "../ui/Button";
import { BarIcon, XIcon } from "../ui/svg";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={twJoin(
          "fixed top-0 z-10",
          "flex w-full max-w-full items-center justify-center",
          "bg-white/80 backdrop-blur-md",
          "md:sticky"
        )}
      >
        <div
          className={twJoin(
            "hidden w-full max-w-7xl",
            "items-center justify-between py-4",
            "md:flex"
          )}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="h-fit rounded-full bg-secondary p-3">
              <LazyLoadImage src="/images/logo-icon.svg" alt="logo" />
            </div>
            <span className="text-2xl font-bold">Getstatic</span>
          </div>
          <ul className="flex space-x-8">
            {navbarItemList.map((item) => (
              <li key={item.id}>
                <span
                  className={twJoin(
                    "cursor-pointer font-satoshi font-medium text-black",
                    "decoration-2 transition-all ease-in-out",
                    "hover:underline hover:underline-offset-4"
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
                "decoration-2 transition-all ease-in-out",
                "hover:underline hover:underline-offset-4"
              )}
            >
              Contact
            </span>
            <button
              className={twJoin(
                "cursor-pointer font-satoshi font-medium text-black",
                "decoration-2 transition-all ease-in-out",
                "hover:underline hover:underline-offset-4"
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
        <div className="flex w-full flex-col justify-between px-4 py-2.5 md:hidden">
          <div className="flex w-full justify-between">
            <div className="h-fit rounded-full bg-secondary p-4">
              <LazyLoadImage src="/images/logo-icon.svg" alt="logo" />
            </div>
            <button
              type="button"
              aria-label="close and open navbar"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XIcon /> : <BarIcon />}
            </button>
          </div>
          {isOpen ? (
            <div className="flex w-full flex-col">
              <ul className="space-y-4">
                {navbarItemList.map((value) => (
                  <li key={value.id}>
                    <span>{value.name}</span>
                  </li>
                ))}
                <li>
                  <span>Contact</span>
                </li>
                <li>
                  <span>Login</span>
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
