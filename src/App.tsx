import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import Banner from "~/components/sections/Banner";
import Benefits from "~/components/sections/Benefits";
import Footer from "~/components/sections/Footer";
import ManageFiles from "~/components/sections/ManageFiles";
import Navbar from "~/components/sections/Navbar";
import Partners from "~/components/sections/Partners";
import Purchase from "~/components/sections/Purchase";
import TryItNow from "~/components/sections/TryItNow";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export default function App() {
  return (
    <div
      className={twJoin("flex w-full max-w-full flex-col items-center justify-center bg-[#FFFFFE]")}
    >
      <Navbar />
      <main
        className={twJoin(
          "flex min-h-screen",
          "mt-20 w-full max-w-7xl flex-col items-center justify-center",
          "overflow-hidden p-4",
          "min-[923px]:mt-10",
          "lg:mt-20"
        )}
      >
        <Banner />
        <Partners />
        <Benefits />
        <ManageFiles />
        <div
          className={twJoin(
            "relative my-10 flex w-full flex-col items-center justify-start",
            "lg:my-20"
          )}
        >
          <LazyLoadImage
            className="relative mt-10 translate-y-48 max-[1280px]:hidden"
            src="/images/purchase-blob.svg"
            alt="purchase blob"
          />
          <div className="flex w-full flex-col items-center justify-center min-[1281px]:absolute">
            <Purchase />
            <TryItNow />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
