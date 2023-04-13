import { m } from "framer-motion";
import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { scaleUp } from "~/lib/utils/animation";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function TryItNow() {
  return (
    <m.section
      viewport={{ once: true }}
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      className={twJoin(
        "my-10 flex flex-col items-center justify-center text-center",
        "md:w-[646px]"
      )}
    >
      <Heading>Try It Now!</Heading>
      <Description className="my-9 text-gray">
        Get started with the simpliest static page hosting ever by uploading your project or
        drag-n-drop wherever you want.
      </Description>
      <Button
        variant="primary"
        className={twJoin(
          "flex items-center justify-center",
          "space-x-3 px-5 py-4",
          "hover:-translate-y-1.5"
        )}
        aria-label="upload zip"
      >
        <LazyLoadImage src="/images/upload-icon.svg" alt="upload" />
        <span>Upload .zip</span>
      </Button>
    </m.section>
  );
}
