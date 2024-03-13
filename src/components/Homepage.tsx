import Experience from "./ExperienceComponent/Experience"
import Projects from "./ProjectsComponent/Projects"
import Service from "./ServiceComponent/Service"
import Slider from "./Slider/Slider"
import Team from "./TeamComponent/Team"

const Homepage = () => {
  return (
    <div>
      <Slider/>
      <Service/> 
      <Projects/>
      <Experience/> 
      <Team/>      
    </div>
  )
}

export default Homepage