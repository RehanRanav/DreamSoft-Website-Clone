import { CustomFlowbiteTheme, Tabs } from "flowbite-react";
import WhyChooseImg from "../../assets/AboutImages/whychooseus.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function WhyChoose() {
  const customTheme: CustomFlowbiteTheme["tabs"] = {
    tablist: {
      styles: {
        underline: "border-b-2 sm:border-t-2",
      },
      tabitem: {
        styles: {
          underline: {
            base: "text-2xl sm:text-lg text-neutral rounded-none tracking-wide",
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
    <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 justify-center items-center md:gap-4 pt-20 pb-12 px-10">
      <div className="h-fit w-fit">
        <img src={WhyChooseImg} alt="Why Choose Us" />
      </div>
      <div className="">
        <div className="text-neutral text-4xl whitespace-nowrap">
          Why Choose Us
        </div>
        <div>
          <Tabs
            aria-label="Tabs with underline"
            style="underline"
            className="flex sm:text-center"
            theme={customTheme}
          >
            <Tabs.Item active title="EXPERIENCE">
              <div className="flex flex-col gap-2">
                <div className="text-black font-medium">
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Cras ultricies ligula sed magna dictum porta. Nulla
                  quis lorem ut libero malesuada feugiat. Nulla porttitor
                  accumsan tincidunt. Cras ultricies ligula sed magna dictum
                  porta.
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 grid-rows-2 gap-4">
                    <div className="font-medium text-neutral tracking-wider text-lg md:text-base sm:text-left">
                      WINDOWS APPLICATIONS
                    </div>
                    <div>
                      <div className="h-1.5 w-full bg-neutral rounded-e">
                        <motion.div
                          initial={{
                            width: "10%",
                          }}
                          whileInView={{
                            width: "79%",
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="h-full bg-primary w-[79%] relative"
                        >
                          <div className="h-2 w-2 bg-primary border-[7px] border-white  p-1 rounded-full absolute right-0 bottom-1/2 translate-y-1/2 shadow-custom">
                            <span className="text-neutral font-medium absolute bottom-0 -translate-y-5 -translate-x-3">
                              <CountUp
                                start={10}
                                end={79}
                                duration={0.5}
                                suffix="%"
                                enableScrollSpy={true}
                              >
                                {({ countUpRef }) => <span ref={countUpRef} />}
                              </CountUp>
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 grid-rows-2 gap-4">
                    <div className="font-medium text-neutral tracking-wider text-lg md:text-base sm:text-left">
                      IOS/MACOS APPS
                    </div>
                    <div>
                      <div className="h-1.5 w-full bg-neutral rounded-e">
                        <motion.div
                          initial={{
                            width: "10%",
                          }}
                          whileInView={{
                            width: "72%",
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="h-full bg-primary w-[72%] relative"
                        >
                          <div className="h-2 w-2 bg-primary border-[7px] border-white  p-1 rounded-full absolute right-0 bottom-1/2 translate-y-1/2 shadow-custom">
                            <span className="text-neutral font-medium absolute bottom-0 -translate-y-5 -translate-x-3">
                              <CountUp
                                start={10}
                                end={72}
                                duration={0.5}
                                suffix="%"
                                enableScrollSpy={true}
                              >
                                {({ countUpRef }) => <span ref={countUpRef} />}
                              </CountUp>
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 grid-rows-2 gap-4">
                    <div className="font-medium text-neutral tracking-wider text-lg md:text-base sm:text-left">
                      ANDROID APPLICATIONS
                    </div>
                    <div>
                      <div className="h-1.5 w-full bg-neutral rounded-e">
                        <motion.div
                          initial={{
                            width: "10%",
                          }}
                          whileInView={{
                            width: "88%",
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="h-full bg-primary w-[88%] relative"
                        >
                          <div className="h-2 w-2 bg-primary border-[7px] border-white  p-1 rounded-full absolute right-0 bottom-1/2 translate-y-1/2 shadow-custom">
                            <span className="text-neutral font-medium absolute bottom-0 -translate-y-5 -translate-x-3">
                              <CountUp
                                start={10}
                                end={88}
                                duration={0.5}
                                suffix="%"
                                enableScrollSpy={true}
                              >
                                {({ countUpRef }) => <span ref={countUpRef} />}
                              </CountUp>
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="SKILL">
              <div className="text-black font-medium">
                <div className="relative w-fit h-fit">
                  <svg
                    className="align-middle"
                    x="0"
                    y="0"
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                  >
                    <circle
                      className="fill-transparent stroke-[#f2f2f2] stroke-[10px]"
                      cx="75"
                      cy="75"
                      r="70"
                    ></circle>
                    <motion.circle
                      initial={{
                        pathOffset: 0,
                      }}
                      whileInView={{
                        pathOffset: 1,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="fill-transparent stroke-primary stroke-[10px]"
                      cx="75"
                      cy="75"
                      r="70"
                      clip-path="url(#vdpwmnqq)"
                    ></motion.circle>
                    <clipPath id="vdpwmnqq">
                      <path d="M 75 75 L 75 -33 A 108 108 0 0 1 75 183 A 108 108 0 0 1 -3.7286117615125107 1.068912559701701"></path>
                    </clipPath>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral text-4xl">
                    <CountUp
                      start={10}
                      end={87}
                      suffix="%"
                      enableScrollSpy={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="MISSION">
              <div className="text-black font-medium flex flex-col gap-6">
                <div>
                  Cras ultricies ligula sed magna dictum porta. Donec rutrum
                  congue leo eget malesuada. Curabitur non nulla sit amet nisl
                  tempus convallis quis ac lectus. Curabitur aliquet quam id dui
                  posuere blandit. Curabitur non nulla sit amet nisl tempus
                  convallis quis ac lectus.
                </div>
                <div>
                  <ul className="list-disc text-primary grid grid-cols-3 grid-rows-2 gap-5 px-5">
                    <li>
                      <span className="text-black">iOS/MacOS Apps</span>
                    </li>
                    <li>
                      <span className="text-black">Applications</span>
                    </li>
                    <li>
                      <span className="text-black">QA & Testing</span>
                    </li>
                    <li>
                      <span className="text-black">UX and Design</span>
                    </li>
                    <li>
                      <span className="text-black">Android Applications</span>
                    </li>
                    <li>
                      <span className="text-black">Database Management</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex sm:flex-col gap-2">
                  <button className="px-6 py-4 border-2 border-primary bg-primary text-secondary font-medium tracking-wide  hover:text-black hover:border-black hover:bg-secondary transition-all duration-300 ease-in-out whitespace-nowrap">
                    GET IN TOUCH
                  </button>
                  <button className="px-12 py-4 border-2 border-black bg-secondary text-black font-medium tracking-wide  hover:text-primary hover:border-primary transition-all duration-300 ease-in-out whitespace-nowrap">
                    DOWNLOAD PRESENTATION
                  </button>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
