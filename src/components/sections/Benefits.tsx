import { twJoin } from "tailwind-merge";
import { benefitsList } from "~/lib/utils/data";
import Button from "../ui/Button";
import LazyLoadImage from "../ui/LazyLoadImage";
import { Description, Heading, Paragraph } from "../ui/typography";

export default function Benefits() {
  return (
    <section
      className={twJoin(
        "my-20",
        "flex w-full flex-col items-center justify-between",
        "md:flex-row"
      )}
    >
      <div className="flex flex-col md:flex-row">
        <LazyLoadImage src="/images/benefits-blob.svg" alt="blob" className="relative" />
        <div
          className={twJoin(
            "absolute grid grid-cols-1 grid-rows-1 gap-6",
            "sm:grid-cols-2 sm:grid-rows-2"
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
                <div className="flex items-center justify-center rounded-full bg-secondary p-5">
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
      </div>
      <div className="md:w-[501px]">
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
      </div>
    </section>
  );
}
