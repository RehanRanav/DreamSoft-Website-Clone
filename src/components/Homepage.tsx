import Blogs from "./BlogComponent";
import Experience from "./ExperienceComponent";
import Review from "./FeedbackComponent";
import Projects from "./ProjectsComponent";
import Service from "./ServiceComponent";
import Slider from "./Slider";
import Team from "./TeamComponent";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <Service />
      <Projects />
      <Experience />
      <Team />
      <Review />
      <Blogs />
    </div>
  );
};

export default Homepage;
