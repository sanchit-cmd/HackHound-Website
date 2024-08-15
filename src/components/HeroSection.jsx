import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        HACKHOUND 
        <span className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-transparent bg-clip-text">
          {" "}
          SRMIST 
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      HackHound at SRM is an inclusive space for students to explore coding and technology. With a history of successful hackathons, workshops, and community initiatives, it empowers members and nurtures future technologists and problem-solvers.
      </p>
      <div className="flex justify-center my-10">
        {/* <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          lorem 
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          lorem
        </a> */}
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#ff930f] shadow-sm shadow-[#fff95b] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#ff930f] shadow-sm shadow-[#fff95b] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
