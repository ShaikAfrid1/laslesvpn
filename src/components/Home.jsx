import illustration from "../assets/illustration-1.svg";
import illustration2 from "../assets/illustration-2.png";
import user from "../assets/user.png";
import location from "../assets/location.png";
import server from "../assets/server.png";

const Home = () => {
  return (
    <div className="bg-[#F9F9FA] px-16">
      <div className="hero1 mt-8 flex justify-around gap-5 py-5  leading-loose">
        <div className="w-[50%] py-10 ">
          <h1 className="font-semibold text-gray-800 leading-15 py-5 text-5xl">
            Want anything to be <br /> easy with
            <span className="font-extrabold"> LaslesVPN.</span>
          </h1>
          <p className="text-gray-700 py-5 my-4">
            Provide a network for all your needs with ease and fun using
            <span className="font-semibold"> LaslesVPN</span> <br /> discover
            interesting features from us.
          </p>
          <button className="bg-orange-600 text-white px-18 py-4 rounded-xl font-semibold hover:text-orange-600 hover:border-orange-600 border-transparent border-2 hover:bg-white shadow-pink-300 shadow-lg transition-all">
            Get Started
          </button>
        </div>
        <div className="w-[50%]">
          <img src={illustration} alt="" />
        </div>
      </div>
      <div className="hero2 mt-24 flex items-center  justify-center ">
        <div className="bg-white flex flex-row px-50 py-10 shadow-2xl">
          <div className="flex justify-center bg-white px-14 py-8 gap-10  items-center">
            <div className="bg-[#FFECEC] rounded-full w-16 h-16 flex items-center justify-center">
              <img src={user} className="w-8 h-8" alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">90+</h1>
              <h3 className="text-gray-500 text-xl">Users</h3>
            </div>
          </div>
          <div className="flex justify-center gap-10 bg-white px-32 py-8 border-l-2 border-r-2 border-gray-200 items-center">
            <div className="bg-[#FFECEC] rounded-full w-16 h-16 flex items-center justify-center">
              <img src={location} className="w-8 h-8" alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">30+</h1>
              <h3 className="text-gray-500 text-xl">Locations</h3>
            </div>
          </div>
          <div className="flex justify-center bg-white gap-10 px-14  py-8   items-center">
            <div className="bg-[#FFECEC] rounded-full w-16 h-16 flex items-center justify-center">
              <img src={server} className="w-8 h-8" alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">50+</h1>
              <h3 className="text-gray-500 text-xl">Servers</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hero3 flex items-center justify-center gap-12">
        <div>
          <img src={illustration2} alt="" />
        </div>
        <div>
          <h1>We Provide Many Features You Can Use</h1>
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul>
            <li>Powerfull online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN</li>
            <li>No specific time limits.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
