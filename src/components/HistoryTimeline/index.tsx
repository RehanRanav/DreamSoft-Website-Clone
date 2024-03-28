import { motion } from "framer-motion";
import Establish from "../../assets/HistoryTimelineImages/establishment.jpg";
import MobileAppDevelopment from "../../assets/HistoryTimelineImages/mobileappdev.jpg";
import OnlineSupport from "../../assets/HistoryTimelineImages/onlinesupport.jpg";
import CRMtoCustomer from "../../assets/HistoryTimelineImages/crmtocustomer.jpg";
import FreelanceDevloper from "../../assets/HistoryTimelineImages/freelancedev.jpg";
import IndustryLeader from "../../assets/HistoryTimelineImages/industryleader.jpg";

const HistoryTimeLine = () => {
  return (
    <div className="flex flex-col gap-8 items-center px-10 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="text-4xl font-medium"
      >
        HISTORY TIMELINE
      </motion.div>
      <div className="w-full h-full">
        <div className="w-full h-full flex gap-6 overflow-x-hidden">
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Establish})`,
            }}
          ></div>
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${MobileAppDevelopment})`,
              width: "25%",
            }}
          ></div>
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${OnlineSupport})`,
              width: "25%",
            }}
          ></div>
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${CRMtoCustomer})`,
              width: "25%",
            }}
          ></div>
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${FreelanceDevloper})`,
              width: "25%",
            }}
          ></div>
          <div
            className="h-60 basis-1/4 shrink-0 grow-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${IndustryLeader})`,
              width: "25%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeLine;
