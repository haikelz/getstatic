import { gsap } from "gsap";
import { lazy, useEffect, useRef } from "react";
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
      className={twJoin(
        "flex w-full max-w-full flex-col items-center justify-center bg-[#FFFFFE] p-4"
      )}
    >
      <Navbar />
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center">
        <Banner />
        <Partners />
        <Benefits />
        <ManageFiles />
        <div className="relative my-10 flex w-full flex-col items-center justify-start lg:my-20">
          <LazyLoadImage
            className="relative mt-10 hidden translate-y-48 lg:block"
            src="/images/purchase-blob.svg"
            alt="purchase blob"
          />
          <div className="flex w-full flex-col items-center justify-center lg:absolute">
            <Purchase />
            <TryItNow />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
