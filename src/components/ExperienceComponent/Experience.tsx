import Mittos from "../../assets/ExperienceImages/mittos.png";
import Pompadour from "../../assets/ExperienceImages/pompadour.png";
import KingMap from "../../assets/ExperienceImages/king-map.png";
import HighestQuality from "../../assets/ExperienceImages/highest-quality.png";

const Experience = () => {
  const CompanyImages = [[Mittos], [Pompadour], [KingMap], [HighestQuality]];
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="w-full flex justify-center items-center md:flex-col md:gap-10">
        <div className="flex sm:flex-col gap-2 justify-center items-center">
          <div className="text-[337px] w-96 h-fit font-bold text-primary -tracking-widest">
            10
          </div>
          <div className="w-fit flex p-4 flex-col flex-1 gap-4 justify-start items-start">
            <div className="w-fit text-4xl border-l-4 border-neutral pl-4">
              <div className="w-fit">Years Of </div>
              <div className="w-fit">Experience</div>
            </div>
            <div className="w-64 text-lg text-neutral font-semibold">
              DreamSoft is a team of highly experienced app designers and
              developers creating unique software for you.
            </div>
            <div className="pt-4">
              <button className="px-16 py-4 border-2 border-primary bg-primary text-secondary hover:text-black hover:border-black hover:bg-secondary transition-all duration-300 ease-in-out">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="h-fit grid grid-cols-2 grid-rows-2 m-4">
          <div className="flex pr-8 pb-8 flex-col gap-2 justify-center items-center border-r border-b">
            <div>
              <span className="text-8xl">2</span>
              <span className="text-6xl">K</span>
            </div>
            <div className="text-neutral tracking-widest">APPS DEVELOPED</div>
          </div>

          <div className="flex pl-8 pb-8 flex-col gap-2 justify-center items-center border-b">
            <div>
              <span className="text-8xl">40</span>
            </div>
            <div className="text-neutral tracking-widest">CONSULTANTS</div>
          </div>

          <div className="flex pr-8 pt-8 flex-col gap-2 justify-center items-center border-r">
            <div>
              <span className="text-8xl">12</span>
            </div>
            <div className="text-neutral tracking-widest">AWARDS WON</div>
          </div>

          <div className="flex pl-8 pt-8 flex-col gap-2 justify-center items-center">
            <div>
              <span className="text-8xl">160</span>
            </div>
            <div className="text-neutral tracking-widest">EMPLOYEES</div>
          </div>
        </div>
      </div>
      <div className="w-fit gap-8 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10 pb-20 md:pt-20">
        {CompanyImages.map((image,index) =>(
            <div className="w-fit opacity-50 hover:opacity-100 hover:border hover:border-black transition-all duration-300 ease-in-out" key={index}>
                <img src={`${image}`} alt="Image" className="border border-black hover:scale-95 transition-all duration-300 ease-in-out"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
