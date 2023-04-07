import { twJoin } from "tailwind-merge";
import { benefitsList } from "~/lib/utils/data";
import { Button } from "../ui/Button";
import { Heading, Paragraph } from "../ui/typography";
import { Description } from "../ui/typography/Description";

const Benefits = () => {
  return (
    <section className="my-20 flex w-full items-center justify-between">
      <div className="flex">
        <img src="/images/benefits-blob.svg" alt="blob" className="relative" />
        <div className="absolute grid grid-cols-2 grid-rows-2 gap-6">
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
                  <img className="h-7 w-7" src={value.icon} alt="storage" loading="lazy" />
                </div>
                <span className="my-6 font-bold">{value.title}</span>
                <div className="w-[240px]">
                  <Paragraph>{value.description}</Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[501px]">
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
};

export default Benefits;
