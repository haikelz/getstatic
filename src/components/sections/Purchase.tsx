import { Variants, m } from "framer-motion";
import { lazy, useState } from "react";
import { twJoin } from "tailwind-merge";
import { useVisible } from "~/hooks/useVisible";
import { purchaseList } from "~/lib/utils/data";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const variants: Variants = {
  hidden: { opacity: 0, top: 0 },
  visible: { opacity: 100, top: 100 },
  exit: { opacity: 0, top: 0 },
};

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function Purchase() {
  const [ref, controls] = useVisible();
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <Heading>Purchase</Heading>
        <Description className="mt-9 mb-14 md:w-[646px]">
          Start using getstatic as a hosting for your websites today to get the best features to
          buck ratio on the market
        </Description>
        <div className="mb-24">
          <div className="flex w-full items-center justify-end">
            <div className="w-fit rounded-r-full rounded-tl-full bg-secondary px-3 py-1.5">
              <span className="text-primary">SAVE 20%</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <span>Monthly</span>
            <div
              className={twJoin(
                "flex items-start justify-start",
                "rounded-full bg-primary",
                "py-1.5 pl-9 pr-2"
              )}
            >
              <div className="h-5 w-5 rounded-full bg-white"></div>
            </div>
            <span>Annualy</span>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={twJoin(
          "grid w-full grid-cols-1 grid-rows-1 gap-6 md:w-fit",
          "sm:grid-cols-2",
          "md:grid-cols-3",
          "lg:grid-cols-4"
        )}
      >
        {purchaseList.map((value) => (
          <m.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={value.id}
            className={twJoin(
              "flex cursor-pointer flex-col",
              "rounded-lg p-6",
              "transition-all ease-in-out",
              "hover:scale-105",
              value.pricePerMonth === selectedPrice
                ? "bg-primary text-white"
                : "border-2 border-[#F4F4F4] bg-white text-black"
            )}
            onClick={() => setSelectedPrice(value.pricePerMonth)}
          >
            <span>{value.plan}</span>
            <div className="my-6">
              <div className="font-lexend font-medium">
                <span className="text-5xl">${value.pricePerMonth} </span>
                <span className="text-2xl">/month</span>
              </div>
              <ul className="my-6 space-y-3">
                {value.features.map((list) => (
                  <li className="flex items-center space-x-4" key={value.id}>
                    <LazyLoadImage
                      src={
                        value.pricePerMonth === selectedPrice
                          ? "/images/check-white-icon.svg"
                          : "/images/check-icon.svg"
                      }
                      alt="checklist"
                    />
                    <span>{list}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={twJoin(
                  "w-full py-3.5",
                  value.pricePerMonth === selectedPrice ? "text-primary" : "text-white"
                )}
                variant={value.pricePerMonth === selectedPrice ? "secondary" : "primary"}
                aria-label="proceed"
              >
                Proceed with {value.plan}
              </Button>
            </div>
            <span
              className={
                value.pricePerMonth === selectedPrice ? "text-white" : "font-medium text-gray"
              }
            >
              {value.pricePerMonth === selectedPrice
                ? "No credit card required."
                : `$${value.priceAnnualy} billed annualy. Save $${
                    value.priceAnnualy / value.pricePerMonth
                  }.`}
            </span>
          </m.div>
        ))}
      </div>
    </section>
  );
}
