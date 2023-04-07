import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { Button } from "../ui/Button";
import { Heading, Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

const Banner = () => {
  return (
    <section className="mt-20 mb-10 flex w-full items-center justify-between">
      <div className="h-[299px] w-[536px]">
        <Heading>
          Get <span className="text-primary">Static</span> Site Hosting{" "}
          <span className="text-primary">Freedom</span>
        </Heading>
        <Paragraph className="my-9 w-[387px] font-satoshi text-xl font-medium text-gray">
          Drag-n-drop a file with your page or a website and we will take care of the rest.
        </Paragraph>
        <div className="flex space-x-4">
          <Button
            variant="primary"
            className={twJoin("flex items-center justify-center space-x-3", "py-3.5 px-4")}
            aria-label="upload"
          >
            <img src="/images/upload-icon.svg" alt="upload" loading="lazy" />
            <span className="font-abeezee italic">Upload for free</span>
          </Button>
          <button type="button" className="flex space-x-3 py-3.5 px-4" aria-label="watch video">
            <img src="/images/youtube-icon.svg" alt="watch video" loading="lazy" />
            <span className="font-abeezee">Watch Video</span>
          </button>
        </div>
      </div>
      <div className="flex w-[585px] items-center justify-start">
        <div className="absolute w-[494px] rounded-lg border-2 border-cultured bg-white p-5">
          <div className="mb-5 flex items-center justify-between border-b-2 border-b-cultured pb-5">
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
              <LazyLoadImage src="/images/search-icon.svg" alt="search" />
              <LazyLoadImage src="/images/shopping-basket-icon.svg" alt="shopping basket" />
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex justify-start">
              <img src="/images/bag.png" alt="" />
              <div></div>
            </div>
            <div className="flex w-[155px] flex-col">
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
        <div className="ml-14">
          <img src="/images/banner-blob.svg" alt="blob banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
