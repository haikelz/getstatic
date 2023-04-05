import { twJoin } from "tailwind-merge";
import { Heading, Paragraph } from "~/components/ui/typography";
import { Button } from "../ui/buttons";

const Banner = () => {
  return (
    <section className="flex w-full items-center justify-between border-2">
      <div className="h-[299px] w-[536px]">
        <Heading>
          Get <span className="text-primary">Static</span> Site Hosting{" "}
          <span className="text-primary">Freedom</span>
        </Heading>
        <Paragraph className="my-9 font-satoshi text-xl font-medium text-gray">
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
          <button className="flex space-x-3 py-3.5 px-4" type="button" aria-label="watch video">
            <img src="/images/youtube-icon.svg" alt="watch video" loading="lazy" />
            <span className="font-abeezee">Watch Video</span>
          </button>
        </div>
      </div>
      <div className="">
        <div className="absolute rounded-lg bg-white p-4">
          <div>
            <ul>
              <li>
                <span></span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <span>Cool Bag From Barrdi Darken</span>
              <span>New Release</span>
              <span>$95</span>
              <Button variant="primary">Add To Cart</Button>
            </div>
            <div className="flex justify-start">
              <img src="/images/bag.png" alt="" />
              <div></div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/images/banner-blob.svg" alt="blob banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
