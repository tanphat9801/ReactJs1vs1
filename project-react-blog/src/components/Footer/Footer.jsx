import FooterCreate from "./FooterCreate";
import FooterCategory from "./FooterCategory";
import FooterContact from "./FooterContact";
import FooterFanpage from "./FooterFanpage";
const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-white">
        <div className="tcl-container">
          <div className="footer">
            <div className="tcl-row">
              {/* Footer Column */}
              <FooterCreate />
              {/* Footer Column */}
              <FooterCategory />
              {/* Footer Column */}
              <FooterContact />
              {/* Footer Column */}
              <FooterFanpage />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
