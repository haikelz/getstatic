import { m } from "framer-motion";
import { twJoin } from "tailwind-merge";
import { leftToRight, rightToLeft, transition } from "~/lib/utils/animation";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

export default function Banner() {
  return (
    <section
      className={twJoin(
        "mt-20 mb-10",
        "flex w-full flex-col items-center justify-center text-center lg:justify-between lg:text-left",
        "lg:mb-20 lg:flex-row"
      )}
    >
      <m.div
        transition={transition}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={leftToRight}
        className="lg:h-[299px] lg:w-[536px]"
      >
        <Heading>
          Get <span className="text-primary">Static</span> Site Hosting{" "}
          <span className="text-primary">Freedom</span>
        </Heading>
        <Description
          className={twJoin("my-9 font-satoshi text-xl font-medium text-gray", "lg:w-[387px]")}
        >
          Drag-n-drop a file with your page or a website and we will take care of the rest.
        </Description>
        <div className="flex w-full items-center justify-center space-x-4 lg:w-fit">
          <Button
            variant="primary"
            className={twJoin("flex items-center justify-center space-x-3", "py-3.5 px-4")}
            aria-label="upload"
          >
            <img src="/images/upload-icon.svg" alt="upload" loading="eager" />
            <span className="font-abeezee italic">Upload for free</span>
          </Button>
          <button type="button" className="flex space-x-3 py-3.5 px-4" aria-label="watch video">
            <img src="/images/youtube-icon.svg" alt="watch video" loading="eager" />
            <span className="font-abeezee">Watch Video</span>
          </button>
        </div>
      </m.div>
      <m.div
        transition={transition}
        variants={rightToLeft}
        initial="hidden"
        animate="visible"
        className={twJoin(
          "relative mt-9 flex w-full flex-col items-center justify-center md:justify-center",
          "lg:mt-0 lg:w-[585px]"
        )}
      >
        <div className="absolute flex h-full items-center justify-center">
          <div
            className={twJoin("rounded-lg border-2 border-cultured bg-white p-5", "sm:w-[494px]")}
          >
            <div
              className={twJoin(
                "mb-5 flex items-center justify-between",
                "border-b-2 border-b-cultured",
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
                <img src="/images/bag.png" alt="bag" loading="eager" />
              </div>
              <div className="flex flex-col lg:w-[155px]">
                <span className="text-xl font-medium">Cool Bag From Barrdi Darken</span>
                <div className="mt-4 mb-9 flex flex-col space-y-3">
                  <span className="text-primary">New Release</span>
                  <span className="text-xl font-semibold">$95</span>
                </div>
                <Button variant="primary" className="w-fit px-6 py-3">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img className="md:ml-14" src="/images/banner-blob.svg" alt="blob banner" loading="eager" />
      </m.div>
    </section>
  );
}
