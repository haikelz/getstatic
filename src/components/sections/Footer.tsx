import { lazy } from "react";
import { footerList } from "~/lib/utils/data";
import { EmailInput } from "../ui/EmailInput";
import { Paragraph } from "../ui/typography";

const LazyLoadImage = lazy(() => import("~/components/ui/LazyLoadImage"));

const Footer = () => {
  return (
    <footer className="font-satoshi">
      <div className="flex space-x-10 font-medium">
        <div className="flex flex-col items-center justify-start border-2">
          <div className="flex items-center justify-start space-x-3">
            <div className="rounded-full bg-secondary p-2">
              <LazyLoadImage src="/images/logo-icon.svg" alt="logo" />
            </div>
            <span className="text-[24px] font-bold">Getstatic</span>
          </div>
          <Paragraph>
            One-click solution for your static website. Copyright © 2019-2023.All Rights Reserved.
          </Paragraph>
          <Paragraph>
            Made by <span className="text-darkgrey">DesignModo</span>
          </Paragraph>
        </div>
        <div className="flex">
          {footerList.map((value) => (
            <div>
              <span className="text-[20px] font-medium">{value.title}</span>
              <ul className="mt-4 space-y-2">
                {value.list.map((li) => (
                  <li>
                    <span className="text-base font-medium text-gray">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <span className="text-xl font-medium text-darkgrey">Stay in touch</span>
            <div className="mt-6 flex flex-col">
              <EmailInput />
              <div className="mt-3 space-x-3">
                <input type="checkbox" name="" id="" />
                <span className="text-sm text-gray">
                  I accept <span className="underline decoration-gray">Privacy Policy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
