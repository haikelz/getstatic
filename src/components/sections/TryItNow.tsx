import { lazy } from "react";
import { Button } from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

const TryItNow = () => {
  return (
    <section className="my-32 flex w-[646px] flex-col items-center justify-center text-center">
      <Heading>Try It Now</Heading>
      <Description className="my-9 text-gray">
        Get started with the simpliest static page hosting ever by uploading your project or
        drag-n-drop wherever you want.
      </Description>
      <Button
        className="flex items-center justify-center space-x-3 px-5 py-4"
        variant="primary"
        aria-label="upload zip"
      >
        <LazyLoadImage src="/images/upload-icon.svg" alt="upload" />
        <span>Upload .zip</span>
      </Button>
    </section>
  );
};

export default TryItNow;
