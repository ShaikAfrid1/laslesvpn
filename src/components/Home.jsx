import Illustration from "../assets/illustration 1.svg";
import User from "../assets/user.png";
import Location from "../assets/location.png";
const Home = () => {
  return (
    <div>
      <div className="hero1 flex justify-around gap-5 py-5 px-16 leading-loose">
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
          <img src={Illustration} alt="" />
        </div>
      </div>
      <div className="hero2 flex  justify-around gap-4">
        <div className="flex justify-center gap-8 items-center">
          <div className="bg-[#FFECEC] rounded-[50%] p-3">
            <img src={User} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">90+</h1>
            <h3 className="text-gray-500 text-xl">Users</h3>
          </div>
        </div>
        <div className="flex justify-center px-16 py-8 border-l-2 border-gray-200 gap-8 items-center">
          <div className="bg-[#FFECEC] rounded-[50%] p-3">
            <img src={Location} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">30+</h1>
            <h3 className="text-gray-500 text-xl">Locations</h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
