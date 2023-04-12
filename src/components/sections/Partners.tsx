import { m } from "framer-motion";
import { twJoin } from "tailwind-merge";
import { bottomToTop } from "~/lib/utils/animation";
import { partnersList } from "~/lib/utils/data";
import LazyLoadImage from "../ui/LazyLoadImage";

export default function Partners() {
  return (
    <section className={twJoin("my-10 flex w-full items-center justify-center", "md:my-20")}>
      <div
        className={twJoin(
          "flex flex-col items-center justify-center space-x-0 space-y-10",
          "md:flex-row md:space-y-0 md:space-x-10"
        )}
      >
        {partnersList.map((partner) => (
          <m.div
            variants={bottomToTop}
            transition={{ duration: 0.3, delay: partner.id / 2 }}
            initial="hidden"
            animate="visible"
            key={partner.id}
          >
            <LazyLoadImage src={partner.src} alt={partner.alt} />
          </m.div>
        ))}
      </div>
    </section>
  );
}
