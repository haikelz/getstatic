import { twJoin } from "tailwind-merge";
import Banner from "~/components/sections/Banner";
import Benefits from "~/components/sections/Benefits";
import Footer from "~/components/sections/Footer";
import ManageFiles from "~/components/sections/ManageFiles";
import Navbar from "~/components/sections/Navbar";
import Partners from "~/components/sections/Partners";
import Purchase from "~/components/sections/Purchase";
import TryItNow from "./components/sections/TryItNow";
import { lazy } from "react";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

const App = () => {
  return (
    <div
      className={twJoin(
        "flex w-full max-w-full flex-col items-center justify-center p-4",
        "dark:bg-gray-900 bg-white",
        "dark:text-white"
      )}
    >
      <Navbar />
      <main className="flex w-full max-w-7xl flex-col items-center justify-center">
        <Banner />
        <Partners />
        <Benefits />
        <ManageFiles />
        <div>
          <LazyLoadImage src="/images/purchase-blob.svg" alt="purchase blob" />
          <Purchase />
          <TryItNow />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
