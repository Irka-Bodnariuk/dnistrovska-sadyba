import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 absolute">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
