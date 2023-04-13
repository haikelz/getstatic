import { m } from "framer-motion";
import { lazy, useState } from "react";
import { twJoin } from "tailwind-merge";
import { bottomToTop, leftToRight, scaleUp } from "~/lib/utils/animation";
import { purchaseList } from "~/lib/utils/data";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function Purchase() {
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  return (
    <section
      id="pricing"
      className="mb-10 flex w-full flex-col items-center justify-center lg:mb-20"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <m.div viewport={{ once: true }} variants={scaleUp} initial="hidden" whileInView="visible">
          <Heading>Purchase</Heading>
          <Description className={twJoin("my-9", "md:w-[646px]")}>
            Start using getstatic as a hosting for your websites today to get the best features to
            buck ratio on the market
          </Description>
        </m.div>
        <m.div
          viewport={{ once: true }}
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          className="mb-9 w-full min-[479px]:w-fit"
        >
          <div
            className={twJoin("flex w-full items-center justify-end", "min-[479px]:translate-x-24")}
          >
            <div
              className={twJoin(
                "w-fit",
                "rounded-r-full rounded-tl-full",
                "bg-secondary px-3 py-1.5"
              )}
            >
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
        </m.div>
      </div>
      <div
        className={twJoin(
          "grid w-full grid-cols-1 grid-rows-1 gap-6",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
          "xl:grid-cols-4"
        )}
      >
        {purchaseList.map((value) => (
          <m.div
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            variants={bottomToTop}
            initial="hidden"
            whileInView="visible"
            key={value.id}
            className={twJoin(
              "flex cursor-pointer flex-col",
              "rounded-lg p-6",
              value.pricePerMonth === selectedPrice
                ? "bg-primary text-white"
                : "border-2 border-[#F4F4F4] bg-white text-darkgrey"
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
                {value.features.map((list, index) => (
                  <li className="flex items-center space-x-4" key={index + 1}>
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
                {value.plan === "Free" ? "Try now for " : "Proceed with "} {value.plan}
              </Button>
            </div>
            <span
              className={
                value.pricePerMonth === selectedPrice ? "text-white" : "font-medium text-gray"
              }
            >
              {value.plan === "Free"
                ? "No credit card required."
                : `$${value.priceAnnualy} billed annualy. Save $${
                    (value.priceAnnualy / value.pricePerMonth) * (value.pricePerMonth / 5)
                  }.`}
            </span>
          </m.div>
        ))}
      </div>
    </section>
  );
}
