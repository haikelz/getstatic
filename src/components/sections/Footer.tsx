import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { footerList } from "~/lib/utils/data";
import EmailInput from "../ui/EmailInput";
import { Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function Footer() {
  return (
    <footer className="mb-8 flex w-full flex-col items-start justify-start font-satoshi md:relative md:flex-row">
      <div
        className={twJoin(
          "flex flex-col items-start justify-center font-medium",
          "md:flex-row md:items-start md:justify-start md:space-x-10"
        )}
      >
        <div className="flex flex-col justify-start md:w-[337px]">
          <div className="flex items-center justify-start space-x-3">
            <div className="rounded-full bg-secondary p-2">
              <LazyLoadImage className="h-5 w-5" src="/images/logo-icon.svg" alt="logo" />
            </div>
            <span className="text-2xl font-bold text-darkgrey">Getstatic</span>
          </div>
          <Paragraph className="my-9">
            One-click solution for your static website. Copyright © 2019-2023. All Rights Reserved.
          </Paragraph>
          <Paragraph>
            Made by <span className="text-darkgrey">DesignModo</span>
          </Paragraph>
        </div>
        <div
          className={twJoin(
            "mt-9 grid grid-cols-1 grid-rows-1 gap-9",
            "md:grid-cols-2 md:grid-rows-2",
            "lg:grid-cols-4 lg:grid-rows-1"
          )}
        >
          {footerList.map((value) => (
            <div>
              <span className="font-lexend text-xl font-medium">{value.title}</span>
              <ul className="mt-4 space-y-4">
                {value.list.map((li) => (
                  <li key={li}>
                    <span
                      className={twJoin(
                        "cursor-pointer text-base font-medium text-gray",
                        "hover:underline hover:decoration-gray hover:decoration-2 hover:underline-offset-4"
                      )}
                    >
                      {li}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <span className="font-lexend text-xl font-medium text-darkgrey">Stay in touch</span>
            <div className="mt-6 flex w-full flex-col">
              <EmailInput />
              <div className="mt-3 space-x-3">
                <input type="checkbox" name="" id="" />
                <span className="font-satoshi text-sm text-gray">
                  I accept{" "}
                  <span className="cursor-pointer font-medium underline decoration-gray decoration-2 underline-offset-4">
                    Privacy Policy
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
