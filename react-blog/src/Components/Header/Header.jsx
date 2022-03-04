import "./header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderNav from "./HeaderNav";
const Header = () => {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <div className="tcl-col-2">
            <HeaderLogo/>
          </div>
          <div className="tcl-col-4">
            <HeaderSearch/>
          </div>
          <div className="tcl-col-6">
            <HeaderNav/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
