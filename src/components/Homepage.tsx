import Projects from "./ProjectsComponent/Projects"
import Service from "./ServiceComponent/Service"
import Slider from "./Slider/Slider"

const Homepage = () => {
  return (
    <div>
      <Slider/>
      <Service/> 
      <Projects/>       
    </div>
  )
}

export default Homepage