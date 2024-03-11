const Projects = () => {
  return (
    <div className="py-20 px-10 flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="font-semibold text-4xl">Latest Projects</div>
        <div className="w-2/5 md:w-2/3 sm:w-full  text-center font-normal">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-center items-center">
          <ul className="w-2/3 bg-slate-200 flex justify-around">
            {[
              ["ALL"],
              ["MOBILE APPS"],
              ["CUSTOM SOFTWARE"],
              ["Q&A TESTING"],
              ["UX AND DESIGN"],
            ].map((item)=>(
              <li className="bg-white text- font-medium px-[29px]">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
