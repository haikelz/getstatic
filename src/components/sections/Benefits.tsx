import { benefitsList } from "~/lib/utils/data";
import { Button } from "../ui/buttons";
import { Heading, Paragraph } from "../ui/typography";
import { Description } from "../ui/typography/Description";

const Benefits = () => {
  return (
    <section>
      <div className="flex">
        <div className="grid grid-cols-2 grid-rows-2">
          {benefitsList.map((value) => (
            <div key={value.id} className="rounded-md">
              <div className="flex items-center justify-center rounded-xl">
                <div></div>
                <span></span>
                <Paragraph>{value.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Heading className="capitalize">
            Hosting solution with <span className="text-primary">benefits</span>
          </Heading>
          <Description>
            Turn your ideas into reality with Static.With a lot of powerful features, we guarantee
            simplicity and clarity.
          </Description>
          <Button className="py-3.5 px-4">Start for Free</Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
