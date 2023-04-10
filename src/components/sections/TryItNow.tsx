import { lazy } from "react";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";
import { twJoin } from "tailwind-merge";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function TryItNow() {
  return (
    <section
      className={twJoin(
        "my-10 flex flex-col items-center justify-center text-center md:my-20",
        "md:w-[646px]"
      )}
    >
      <Heading>Try It Now!</Heading>
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
}
