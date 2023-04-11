import { m } from "framer-motion";
import { twJoin } from "tailwind-merge";
import { useVisible } from "~/hooks/useVisible";
import { leftToRight, rightToLeft, transition } from "~/lib/utils/animation";
import { benefitsList } from "~/lib/utils/data";
import Button from "../ui/Button";
import LazyLoadImage from "../ui/LazyLoadImage";
import { Description, Heading, Paragraph } from "../ui/typography";

export default function Benefits() {
  const [ref, controls] = useVisible();

  return (
    <section
      className={twJoin(
        "relative my-10",
        "flex w-full flex-col-reverse items-center justify-center text-center",
        "lg:space-x-10 lg:text-left",
        "lg:my-20 lg:flex-row lg:justify-between"
      )}
    >
      <m.div
        ref={ref}
        variants={leftToRight}
        transition={transition}
        initial="hidden"
        animate={controls}
        className={twJoin(
          "relative",
          "flex w-full flex-col items-center justify-center",
          "lg:w-fit"
        )}
      >
        <LazyLoadImage
          className="relative hidden sm:block"
          src="/images/benefits-blob.svg"
          alt="benefits blob"
        />
        <div
          className={twJoin(
            "grid grid-cols-1 grid-rows-1 gap-6",
            "sm:absolute sm:grid-cols-2 sm:grid-rows-2"
          )}
        >
          {benefitsList.map((value) => (
            <div
              key={value.id}
              className={twJoin(
                "cursor-pointer rounded-md",
                "border-2 border-[#F4F4F4] bg-white",
                "px-4 py-7",
                "transition-all ease-in-out",
                "hover:scale-105"
              )}
            >
              <div className="flex flex-col items-center justify-center rounded-xl text-center">
                <div
                  className={twJoin(
                    "flex items-center justify-center",
                    "rounded-full bg-secondary p-5"
                  )}
                >
                  <LazyLoadImage className="h-7 w-7" src={value.icon} alt="storage" />
                </div>
                <span className="my-6 font-bold">{value.title}</span>
                <div className="md:w-[240px]">
                  <Paragraph>{value.description}</Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </m.div>
      <m.div
        ref={ref}
        transition={transition}
        variants={rightToLeft}
        initial="hidden"
        animate={controls}
        className={twJoin("mb-9", "lg:mb-0 lg:w-[501px]")}
      >
        <Heading className="capitalize">
          Hosting solution with <span className="text-primary">benefits</span>
        </Heading>
        <Description className="my-9">
          Turn your ideas into reality with Static. With a lot of powerful features, we guarantee
          simplicity and clarity.
        </Description>
        <Button variant="primary" className="py-3.5 px-4">
          Start for Free
        </Button>
      </m.div>
    </section>
  );
}
