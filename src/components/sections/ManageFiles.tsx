import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { actionsList, manageFilesList } from "~/lib/utils/data";
import Button from "../ui/Button";
import { Heading, Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function ManageFiles() {
  return (
    <section
      className={twJoin("my-20", "flex flex-col items-center justify-between", "xl:flex-row")}
    >
      <div className="flex flex-col">
        <Heading>
          Manage Files In <span className="text-primary">The</span> Intuitive Way.
        </Heading>
        <Paragraph className="my-9 text-xl md:w-[31.313rem]">
          Don’t worry if you missed something. With Static, you can easily manage and edit your
          files on the fly.
        </Paragraph>
        <Button variant="primary" className="w-fit py-4 px-6">
          Try It Now
        </Button>
      </div>
      <div className="relative flex flex-col items-start justify-start">
        <LazyLoadImage
          className="relative"
          src="/images/managefiles-blob.svg"
          alt="manage files blob"
        />
        <div className="left-10 flex flex-col items-center justify-center md:absolute md:flex-row">
          <div
            className={twJoin(
              "relative h-fit",
              "rounded-lg border-2 border-cultured bg-white",
              "p-12"
            )}
          >
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
                    <div className="h-0.5 w-6 bg-black"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={twJoin(
              "bottom-10 -right-32 md:absolute",
              "rounded-lg border-2 border-cultured bg-white",
              "p-7"
            )}
          >
            <ul className="flex flex-col items-start justify-center space-y-6">
              {actionsList.map((value) => (
                <li className="flex items-center justify-center space-x-6" key={value.id}>
                  <LazyLoadImage src={value.icon} alt={value.name.toLowerCase()} />
                  <span>{value.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
