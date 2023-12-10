import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
