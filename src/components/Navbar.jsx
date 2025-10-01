import Logo from "../assets/Logo.svg";
const Navbar = () => {
  return (
    <div>
      <div className="flex relative justify-between items-center my-6 py-2 mx-10 px-5">
        <div>
          <img className="cursor-pointer" src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-10 justify-center text-gray-500 items-center align-middle">
            <li className="cursor-pointer hover:text-orange-600">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <a href="#">Features</a>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <a href="#">Pricing</a>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <a href="#">Testimonials</a>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className="left-auto">
          <ul className="flex justify-center gap-10 items-center">
            <li className="cursor-pointer hover:text-orange-600 font-semibold text-gray-800">
              <a href="#">Sign In</a>
            </li>
            <li className="cursor-pointer border border-orange-600 text-orange-600 rounded-full px-8 py-2  font-semibold hover:bg-orange-600 hover:text-white transition-all">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
