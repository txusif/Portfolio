import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto py-5 px-8 border-b">
      <div className="flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
