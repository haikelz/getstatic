import { twJoin } from "tailwind-merge";
import Banner from "~/components/sections/Banner";
import Partners from "~/components/sections/Partners";
import Navbar from "~/components/sections/Navbar";
import Benefits from "~/components/sections/Benefits";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div
      className={twJoin(
        "flex w-full max-w-full flex-col items-center justify-center p-4",
        "dark:bg-gray-900 bg-white",
        "dark:text-white"
      )}
    >
      <main className="flex w-full max-w-7xl flex-col items-center justify-center border-2">
        <Navbar />
        <Banner />
        <Partners />
        <Benefits />
        <Footer />
      </main>
    </div>
  );
};

export default App;
