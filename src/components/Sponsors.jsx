import mlhImg from "../assets/mlh.png";

const Sponsors = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Our Past{" "}
        <span className="bg-gradient-to-r from-[#ff930f] to-[#fff95b]  text-transparent bg-clip-text">
          SPONSORS
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">       
          <img src={mlhImg} alt="MLH" />               
      </div>
    </div>
  );
};

export default Sponsors;
