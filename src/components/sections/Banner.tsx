import { Variants, m } from "framer-motion";
import { twJoin } from "tailwind-merge";
import Button from "../ui/Button";
import LazyLoadImage from "../ui/LazyLoadImage";
import { Description, Heading } from "../ui/typography";

const variants: Variants = {
  hidden: { opacity: 0, right: 100 },
  visible: { opacity: 1, right: 0 },
  exit: { opacity: 0, right: 100 },
};

const productVariants: Variants = {
  hidden: { opacity: 0, left: 100 },
  visible: { opacity: 1, left: 0 },
  exit: { opacity: 0, left: 100 },
};

export default function Banner() {
  return (
    <section
      className={twJoin(
        "mt-20 mb-10",
        "flex w-full flex-col items-center justify-between",
        "md:mb-20 md:flex-row"
      )}
    >
      <m.div
        transition={{ duration: 0.4 }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className={twJoin("relative", "md:h-[299px] md:w-[536px]")}
      >
        <Heading>
          Get <span className="text-primary">Static</span> Site Hosting{" "}
          <span className="text-primary">Freedom</span>
        </Heading>
        <Description
          className={twJoin("my-9 font-satoshi text-xl font-medium text-gray", "md:w-[387px]")}
        >
          Drag-n-drop a file with your page or a website and we will take care of the rest.
        </Description>
        <div className="flex space-x-4">
          <Button
            variant="primary"
            className={twJoin("flex items-center justify-center space-x-3", "py-3.5 px-4")}
            aria-label="upload"
          >
            <LazyLoadImage src="/images/upload-icon.svg" alt="upload" />
            <span className="font-abeezee italic">Upload for free</span>
          </Button>
          <button type="button" className="flex space-x-3 py-3.5 px-4" aria-label="watch video">
            <LazyLoadImage src="/images/youtube-icon.svg" alt="watch video" />
            <span className="font-abeezee">Watch Video</span>
          </button>
        </div>
      </m.div>
      <m.div
        transition={{ duration: 0.4 }}
        variants={productVariants}
        initial="hidden"
        animate="visible"
        className={twJoin(
          "relative mt-9 flex flex-col items-start justify-start",
          "md:w-[585px] md:flex-row"
        )}
      >
        <div className={twJoin("rounded-lg border-2 border-cultured bg-white p-5", "md:w-[494px]")}>
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
              <LazyLoadImage src="/images/search-icon.svg" alt="search" />
              <LazyLoadImage src="/images/shopping-basket-icon.svg" alt="shopping basket" />
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex justify-start">
              <LazyLoadImage src="/images/bag.png" alt="bag" />
            </div>
            <div className="flex flex-col md:w-[155px]">
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
        <LazyLoadImage
          className="hidden md:ml-14 md:block"
          src="/images/banner-blob.svg"
          alt="blob banner"
        />
      </m.div>
    </section>
  );
}
