import { m } from "framer-motion";
import { twJoin } from "tailwind-merge";
import { leftToRight, rightToLeft } from "~/lib/utils/animation";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

export default function Banner() {
  return (
    <section
      className={twJoin(
        "mb-10",
        "flex w-full flex-col items-start justify-start text-start",
        "sm:items-center sm:justify-center sm:text-center",
        "lg:mb-20 lg:flex-row lg:justify-between lg:text-start"
      )}
    >
      <m.div
        variants={leftToRight}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={twJoin(
          "sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center",
          "lg:block lg:h-[299px] lg:w-[536px] lg:text-start"
        )}
      >
        <Heading>
          Get <span className="text-primary">Static</span> Site Hosting{" "}
          <span className="text-primary">Freedom</span>
        </Heading>
        <Description
          className={twJoin("my-9 text-xl font-medium text-gray", "sm:w-[500px]", "lg:w-[387px]")}
        >
          Drag-n-drop a file with your page or a website and we will take care of the rest.
        </Description>
        <div
          className={twJoin(
            "flex w-fit space-x-4",
            "sm:w-full sm:items-center sm:justify-center",
            "lg:w-fit"
          )}
        >
          <Button
            variant="primary"
            className={twJoin(
              "flex items-center justify-center space-x-3",
              "px-4 py-3.5",
              "hover:-translate-y-1.5"
            )}
            aria-label="upload"
          >
            <img src="/images/upload-icon.svg" alt="upload" loading="eager" />
            <span>Upload for free</span>
          </Button>
          <div
            className={twJoin(
              "flex cursor-pointer items-center justify-center",
              "px-4 py-3.5",
              "transition-all ease-in-out",
              "hover:-translate-y-1.5"
            )}
          >
            <div className="flex space-x-3">
              <img src="/images/youtube-icon.svg" alt="watch video" loading="eager" />
              <span className="font-satoshi text-base font-bold text-darkgrey">Watch Video</span>
            </div>
          </div>
        </div>
      </m.div>
      <m.div
        variants={rightToLeft}
        initial="hidden"
        animate="visible"
        className={twJoin(
          "relative mt-14 flex w-full flex-col items-center justify-center",
          "lg:mt-0 lg:w-[585px]"
        )}
      >
        <img
          className="relative block min-[1155px]:ml-14"
          src="/images/banner-blob.svg"
          alt="blob banner"
          loading="eager"
        />
        <div className="absolute flex h-full items-center justify-center">
          <div
            className={twJoin(
              "rounded-lg border-2 border-cultured bg-white p-5",
              "min-[517px]:w-[494px]"
            )}
          >
            <div
              className={twJoin(
                "mb-5 flex items-center justify-between",
                "border-b-2 border-b-cultured text-darkgrey",
                "pb-5"
              )}
            >
              <span className="text-base font-bold">LOGO</span>
              <ul className="flex space-x-9 font-satoshi text-[12px] font-medium">
                <li>
                  <span>Product</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
              <div className="flex space-x-6">
                <img src="/images/search-icon.svg" alt="search" loading="eager" />
                <img src="/images/shopping-basket-icon.svg" alt="shopping basket" loading="eager" />
              </div>
            </div>
            <div className="flex space-x-8 text-start">
              <div className="flex w-full justify-start lg:w-fit">
                <img className="w-full" src="/images/bag.png" alt="bag" loading="eager" />
              </div>
              <div className="flex flex-col text-darkgrey lg:w-[155px]">
                <span className="text-xl font-medium">Cool Bag From Bardi Darken</span>
                <div className="mb-4 mt-2 flex flex-col space-y-3 sm:mb-9 sm:mt-4">
                  <span className="text-primary">New Release</span>
                  <span className="text-xl font-semibold">$95</span>
                </div>
                <Button variant="primary" className="w-fit px-6 py-3" aria-label="add to cart">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
}
