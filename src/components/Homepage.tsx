import Blogs from "./BlogComponent/Blogs"
import Experience from "./ExperienceComponent/Experience"
import Review from "./FeedbackComponent/Review"
import Footer from "./Footer/Footer"
import Projects from "./ProjectsComponent/Projects"
import Service from "./ServiceComponent/Service"
import Slider from "./Slider/Slider"
import Team from "./TeamComponent/Team"

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Slider/>
      <Service/> 
      <Projects/>
      <Experience/> 
      <Team/>
      <Review/>
      <Blogs/>    
      <Footer/>  
    </div>
  )
}

export default Homepage