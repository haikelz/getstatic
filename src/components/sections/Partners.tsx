import { partnersList } from "~/lib/utils/data";
import LazyLoadImage from "../ui/LazyLoadImage";
import { twJoin } from "tailwind-merge";

export default function Partners() {
  return (
    <section className="my-14 flex items-center justify-center p-14 md:flex-row">
      <div
        className={twJoin(
          "flex flex-col items-center justify-center space-x-0 space-y-10",
          "md:flex-row md:space-y-0 md:space-x-10"
        )}
      >
        {partnersList.map((partner) => (
          <div key={partner.id}>
            <LazyLoadImage src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
