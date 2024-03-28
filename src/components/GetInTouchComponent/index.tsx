const GetInTouch = () => {
  return (
    <div className="px-10 py-10">
      <div className="flex sm:flex-col text-center gap-10 p-4 font-semibold">
        <div className="text-2xl pr-8 border-r sm:border-r-0 sm:border-b sm:pb-4">Get In Touch</div>
        <div className="text-lg">
          If you have any questions, just fill in the contact form, and we will
          answer you shortly.
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1  gap-4">
        <input
          placeholder="Name"
          className="bg-[#efefef] opacity-80 border-none outline-none my-4 placeholder:text-black text-black font-medium py-4 w-full"
          type="text"
        />
        <input
          placeholder="Email"
          className="bg-[#efefef] opacity-80 border-none outline-none my-4 placeholder:text-black text-black font-medium py-4 w-full"
          type="text"
        />
        <input
          placeholder="Phone"
          className="bg-[#efefef] opacity-80 border-none outline-none my-4 placeholder:text-black text-black font-medium py-4 w-full"
          type="number"
        />
      </div>
      <textarea
        placeholder="Message"
        className="bg-[#efefef] opacity-80 border-none outline-none my-4 placeholder:text-black placeholder:font-medium py-4 w-full"
        rows={5}
      ></textarea>
      <button className="py-4 px-20 border-2 border-primary bg-primary text-secondary font-medium tracking-wide  hover:bg-transparent hover:border-black hover:text-black transition-all duration-300 ease-in-out whitespace-nowrap">
        SEND MESSAGE
      </button>
    </div>
  );
};

export default GetInTouch;
