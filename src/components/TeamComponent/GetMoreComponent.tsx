import { CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { FC } from "react";
import { TabComponentProps } from "../../inteface";
import AnyAppWireframe from "../../assets/TeamImages/anyappwireframe.png";
import SocialAppWireframe from "../../assets/TeamImages/socialappwireframe.png";

const TabComponent: FC<TabComponentProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4 sm:justify-center sm:items-center">
      <span className="text-lg">{title}</span>
      <span>{description}</span>
      <div className="mt-4 flex sm:flex-col gap-2">
        <button className="px-6 py-4 border-2 border-primary bg-primary text-secondary font-medium tracking-wide  hover:text-black hover:border-black hover:bg-secondary transition-all duration-300 ease-in-out whitespace-nowrap">
          GET IN TOUCH
        </button>
        <button className="px-12 py-4 border-2 border-black bg-secondary text-black font-medium tracking-wide  hover:text-primary hover:border-primary transition-all duration-300 ease-in-out whitespace-nowrap">
          DOWNLOAD PRESENTATION
        </button>
      </div>
    </div>
  );
};

const GetMoreComponent = () => {
  const TabData = [
    [
      "01",
      "FREE APPS",
      "We regularly upload new free apps to our website, which is fully accessible to our clients and subscribers. You can also find out about free apps in our blog.",
    ],
    [
      "02",
      "GET SOCIAL",
      "Every app we develop has built-in social support that allows you to stay connected to your accounts on Facebook, Instagram, Twitter and other networks.",
    ],
    [
      "03",
      "CUSTOMER SERVICE",
      "Every customer of DreamSoft can get access to our friendly and qualified 24/7 support via chat or phone. Feel free to ask us any questions!",
    ],
    [
      "04",
      "GREAT USABILITY",
      "All our apps are designed to have great usability in order to easily operate our applications. That is why our software has high ratings and lots of awards.",
    ],
  ];

  const customTheme: CustomFlowbiteTheme["tabs"] = {
    tablist: {
      styles: {
        underline: "border-b-2 sm:border-t-2",
      },
      tabitem: {
        styles: {
          underline: {
            base: "text-3xl text-neutral rounded-none ",
            active: {
              on: "text-primary border-b-2 sm:border-t-2 border-primary focus:ring-0",
              off: "hover:text-primary focus:ring-0",
            },
          },
        },
      },
    },
  };

  return (
    <div className="px-10 py-20 w-full grid grid-cols-2 justify-center items-center md:grid-cols-1 md:grid-rows-2">
      <div className="w-full">
        <div className="text-4xl font-medium w-full">Get More With Us</div>
        <div className="w-full mt-2">
          <Tabs
            aria-label="Tabs with underline"
            style="underline"
            className="flex justify-between px-10 sm:px-0 sm:text-center"
            theme={customTheme}
          >
            {TabData.map((item, index) => (
              <Tabs.Item
                active
                title={item[0]}
                className="text-4xl"
                key={index}
              >
                <TabComponent title={item[1]} description={item[2]} />
              </Tabs.Item>
            ))}
          </Tabs>
        </div>
      </div>

      <div className=" px-12 flex justify-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 gap-8 w-fit">
          <img src={AnyAppWireframe} alt="Any App You Wish" />
          <img src={SocialAppWireframe} alt="Socila Apps" />
        </div>
      </div>
    </div>
  );
};

export default GetMoreComponent;