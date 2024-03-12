import Experience from "./ExperienceComponent/Experience"
import Projects from "./ProjectsComponent/Projects"
import Service from "./ServiceComponent/Service"
import Slider from "./Slider/Slider"

const Homepage = () => {
  return (
    <div>
      <Slider/>
      <Service/> 
      <Projects/>
      <Experience/>       
    </div>
  )
}

export default Homepage