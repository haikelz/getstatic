import { Button } from "../ui/buttons";
import { Heading, Paragraph } from "../ui/typography";

const TryItNow = () => {
  return (
    <section>
      <div>
        <Heading>Try It Now</Heading>
        <Paragraph className="text-gray">
          Get started with the simpliest static page hosting ever by uploading your project or
          drag-n-drop wherever you want.
        </Paragraph>
        <Button className="px-3 py-4" variant="primary" aria-label="upload zip">
          Upload Zip
        </Button>
      </div>
    </section>
  );
};

export default TryItNow;
