import { m } from "framer-motion";
import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { bottomToTop } from "~/lib/utils/animation";
import { footerList } from "~/lib/utils/data";
import InputEmail from "../ui/InputEmail";
import { Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function Footer() {
  return (
    <m.footer
      viewport={{ once: true }}
      variants={bottomToTop}
      initial="hidden"
      whileInView="visible"
      className={twJoin(
        "flex w-full flex-col items-start justify-start",
        "mb-5 font-satoshi",
        "sm:mt-10",
        "lg:relative lg:flex-row"
      )}
    >
      <div
        className={twJoin(
          "flex w-full flex-col items-start justify-center font-medium",
          "md:items-start md:justify-between",
          "lg:flex-row lg:space-x-20"
        )}
      >
        <div className="mb-9 flex flex-col justify-start">
          <div className="flex items-center justify-start space-x-3">
            <div className="rounded-full bg-secondary p-2">
              <LazyLoadImage className="h-5 w-5" src="/images/logo-icon.svg" alt="logo" />
            </div>
            <span className="text-2xl font-bold text-darkgrey">Getstatic</span>
          </div>
          <Paragraph className="my-9 w-[337px]">
            One-click solution for your static website. Copyright © 2019-2023. All Rights Reserved.
          </Paragraph>
          <Paragraph>
            Made by <span className="text-darkgrey">DesignModo</span>
          </Paragraph>
        </div>
        <div
          className={twJoin(
            "grid w-full grid-cols-1 grid-rows-1 gap-10",
            "min-[535px]:grid-cols-2",
            "sm:grid-cols-3",
            "lg:grid-cols-5"
          )}
        >
          {footerList.map((value) => (
            <div className="w-fit" key={value.id}>
              <span className="font-lexend text-xl font-medium text-darkgrey">{value.title}</span>
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
          <div className="w-fit lg:col-span-2 lg:w-full">
            <span className="font-lexend text-xl font-medium text-darkgrey">Stay in touch</span>
            <div className="mt-6 flex w-full flex-col">
              <InputEmail />
              <div className="mt-3 space-x-2">
                <input type="checkbox" name="checkbox-privacy" />
                <span className="font-satoshi text-sm text-gray">
                  I accept{" "}
                  <span
                    className={twJoin(
                      "cursor-pointer font-medium underline",
                      "decoration-gray decoration-2 underline-offset-4"
                    )}
                  >
                    Privacy Policy
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.footer>
  );
}
