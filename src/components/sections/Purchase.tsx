import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { purchaseList } from "~/lib/utils/data";
import { Button } from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

const Purchase = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <Heading>Purchase</Heading>
        <Description className="mt-9 w-[646px]">
          Start using getstatic as a hosting for your websites today to get the best features to
          buck ratio on the market
        </Description>
        <div>
          <div className="w-fit rounded-lg bg-secondary p-2">
            <span className="text-primary">SAVE 20%</span>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <span>Monthly</span>
            <div className="rounded-full bg-primary py-1.5 px-2">
              <div className="h-5 w-5 rounded-full bg-white p-3"></div>
            </div>
            <span>Annualy</span>
          </div>
        </div>
      </div>
      {/** Purchase plan */}
      <div
        className={twJoin(
          "grid grid-cols-1 grid-rows-1 gap-6",
          "sm:grid-cols-2",
          "md:grid-cols-3",
          "lg:grid-cols-4"
        )}
      >
        {purchaseList.map((value) => (
          <div
            key={value.id}
            className={twJoin(
              "flex cursor-pointer flex-col rounded-lg p-6 transition-all ease-in-out",
              "hover:scale-105",
              value.plan === "Free"
                ? "bg-primary text-white"
                : "border-2 border-[#F4F4F4] bg-white text-black"
            )}
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
                        value.plan === "Free"
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
                  value.plan === "Free" ? "text-primary" : "text-white"
                )}
                variant={value.plan === "Free" ? "secondary" : "primary"}
                aria-label="proceed"
              >
                Proceed with {value.plan}
              </Button>
            </div>
            <span className={value.plan === "Free" ? "text-white" : "font-medium text-gray"}>
              {value.plan === "Free"
                ? "No credit card required."
                : `$${value.priceAnnualy} billed annualy. Save $${
                    value.priceAnnualy / value.pricePerMonth
                  }.`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Purchase;
