import { m } from "framer-motion";
import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { useVisible } from "~/hooks";
import { leftToRight, rightToLeft, transition } from "~/lib/utils/animation";
import { actionsList, manageFilesList } from "~/lib/utils/data";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function ManageFiles() {
  const [ref, controls] = useVisible();

  return (
    <section
      className={twJoin(
        "my-10 flex flex-col items-start justify-start",
        "sm:items-center sm:justify-center sm:text-center",
        "lg:my-20 lg:flex-row lg:justify-between lg:text-start"
      )}
    >
      <m.div
        transition={transition}
        ref={ref}
        variants={leftToRight}
        initial="hidden"
        animate={controls}
        className={twJoin(
          "flex flex-col items-start justify-start text-start",
          "sm:items-center sm:justify-center sm:text-center",
          "lg:items-start lg:justify-start lg:text-start"
        )}
      >
        <Heading>
          Manage Files In <span className="text-primary">The</span> Intuitive Way.
        </Heading>
        <Description className={twJoin("my-9 text-xl", "lg:w-[31.313rem]")}>
          Don’t worry if you missed something. With Static, you can easily manage and edit your
          files on the fly.
        </Description>
        <Button variant="primary" className="w-fit py-4 px-6">
          Try It Now
        </Button>
      </m.div>
      <m.div
        transition={transition}
        ref={ref}
        variants={rightToLeft}
        initial="hidden"
        animate={controls}
        className={twJoin(
          "relative mt-9 flex w-full flex-col items-center justify-center text-darkgrey",
          "lg:mt-0 lg:w-[80%] lg:items-center lg:justify-center"
        )}
      >
        <LazyLoadImage
          src="/images/managefiles-blob.svg"
          alt="manage files blob"
          className={twJoin("relative hidden", "md:block")}
        />
        <div
          className={twJoin(
            "relative flex flex-col items-center justify-center",
            "md:absolute md:flex-row"
          )}
        >
          <div className={twJoin("h-fit rounded-lg", "border-2 border-cultured bg-white", "p-12")}>
            <ul className="flex flex-col justify-between">
              {manageFilesList.map((value) => (
                <li
                  className={twJoin(
                    "flex items-center justify-between space-x-24",
                    value.name === "logo.png" ? "" : "mb-4 border-b border-b-cultured pb-6"
                  )}
                  key={value.id}
                >
                  <div className="flex items-center justify-center space-x-6">
                    <div
                      className={twJoin(
                        value.name === "index.html"
                          ? "rounded-sm bg-cultured p-2"
                          : value.name === "logo.png"
                          ? "rounded-full bg-[#B0EAC8] p-1.5"
                          : ""
                      )}
                    >
                      <LazyLoadImage
                        className={value.name === "logo.png" ? "h-4 w-4" : ""}
                        src={value.icon}
                        alt={value.name}
                      />
                    </div>
                    <span className="font-satoshi text-xl font-medium">{value.name}</span>
                  </div>
                  {value.name === "index.html" || value.name === "logo.png" ? (
                    <span className="font-satoshi text-gray">feb 13, 2023</span>
                  ) : (
                    <div className="h-0.5 w-6 bg-darkgrey"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={twJoin(
              "absolute bottom-5 right-4 rounded-lg",
              "border-2 border-cultured bg-white p-7",
              "md:-right-32 md:bottom-10",
              "lg:right-4",
              "2xl:-right-32"
            )}
          >
            <ul className="flex flex-col items-start justify-center space-y-6">
              {actionsList.map((value) => (
                <li className="flex items-center justify-center space-x-6" key={value.id}>
                  <LazyLoadImage src={value.icon} alt={value.name.toLowerCase()} />
                  <span className="text-darkgrey">{value.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </m.div>
    </section>
  );
}
