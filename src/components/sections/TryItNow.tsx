import { m } from "framer-motion";
import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { useVisible } from "~/hooks/useVisible";
import { bottomToTop, scaleUp } from "~/lib/utils/animation";
import Button from "../ui/Button";
import { Description, Heading } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function TryItNow() {
  const [ref, controls] = useVisible();

  return (
    <m.section
      ref={ref}
      variants={scaleUp}
      transition={{ duration: 0.4, delay: 0.3 }}
      initial="hidden"
      animate={controls}
      className={twJoin(
        "mt-10 flex flex-col items-center justify-center text-center md:mt-20",
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
    </m.section>
  );
}
