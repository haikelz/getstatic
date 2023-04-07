import { lazy } from "react";
import { twJoin } from "tailwind-merge";
import { manageFilesList } from "~/lib/utils/data";
import { Button } from "../ui/Button";
import { Heading, Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

export const actionsList = [
  {
    id: 1,
    icon: "/images/upload-files-icon.svg",
    name: "Upload File",
  },
  {
    id: 2,
    icon: "/images/trash-icon.svg",
    name: "Show Removed",
  },
  {
    id: 3,
    icon: "/images/empty-folder-icon.svg",
    name: "Empty Project",
  },
  {
    id: 4,
    icon: "/images/export-icon.svg",
    name: "Export as ZIP",
  },
];

const ManageFiles = () => {
  return (
    <section className="my-20 flex items-center justify-between">
      <div className="flex flex-col">
        <Heading>
          Manage Files In <span className="text-primary">The</span> Intuitive Way.
        </Heading>
        <Paragraph className="my-9 w-[501px]">
          Don’t worry if you missed something. With Static, you can easily manage and edit your
          files on the fly.
        </Paragraph>
        <Button variant="primary" className="w-fit py-3.5 px-5">
          Try It Now
        </Button>
      </div>
      <div>
        <div className="rounded-lg border-2 border-cultured p-12">
          <ul>
            {manageFilesList.map((value) => (
              <li
                className={twJoin(
                  "mb-4 flex items-center justify-between pb-6",
                  value.name === "logo.png" ? "" : "border-b border-b-cultured"
                )}
                key={value.id}
              >
                <div className="flex items-center justify-center space-x-6">
                  <div
                    className={twJoin(
                      value.name === "index.html"
                        ? "rounded-sm bg-cultured p-2"
                        : value.name === "logo.png"
                        ? "rounded-full bg-[#B0EAC8] p-1.5"
                        : ""
                    )}
                  >
                    <LazyLoadImage
                      className={value.name === "logo.png" ? "h-4 w-4" : ""}
                      src={value.icon}
                      alt={value.name}
                    />
                  </div>
                  <span className="font-satoshi text-xl font-medium">{value.name}</span>
                </div>
                {value.name === "index.html" || value.name === "logo.png" ? (
                  <span className="font-satoshi text-gray">feb 13, 2023</span>
                ) : (
                  <div className="h-0.5 w-6 bg-black"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <LazyLoadImage src="/images/managefiles-blob.svg" alt="manage files blob" />
      </div>
      <div className="absolute rounded-lg border-2 border-cultured bg-white p-7">
        <ul className="flex flex-col items-start justify-center space-y-6">
          {actionsList.map((value) => (
            <li className="flex items-center justify-center space-x-6" key={value.id}>
              <img src={value.icon} alt={value.name.toLowerCase()} />
              <span>{value.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ManageFiles;
