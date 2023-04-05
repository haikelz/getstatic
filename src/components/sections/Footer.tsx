import { footerList } from "~/lib/utils/data";
import { Paragraph } from "../ui/typography";

const Footer = () => {
  return (
    <footer>
      <div className="flex space-x-5">
        <div>
          <div className="flex items-center justify-center space-x-3">
            <div className="rounded-full bg-secondary p-2">
              <img src="/images/logo-icon.svg" />
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
        {footerList.map((value) => (
          <div>
            <span className="text-[20px]">{value.title}</span>
            <ul className="mt-4 space-y-2">
              {value.list.map((li) => (
                <li>
                  <Paragraph>{li}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <span>Features</span>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <span>Account</span>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <span>Stay in Touch</span>
          <input type="email" />
          {/**checkbox */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
