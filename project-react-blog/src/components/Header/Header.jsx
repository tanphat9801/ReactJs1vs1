import "./header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
  return (
    <>
      {/* Component Header */}
      <header id="header">
        <div className="tcl-container">
          <div className="tcl-row tcl-no-gutters header">
            <HeaderLogo />
            <HeaderSearch/>
            <HeaderMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
