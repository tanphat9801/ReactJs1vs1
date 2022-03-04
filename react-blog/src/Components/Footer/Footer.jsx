import "./footer.css"
import FooterCreate from "./FooterCreate";
import FooterTitle from "./FooterTitle";
import FooterContact from "./FooterContact";
import FooterFanpage from "./FooterFanpage";

const Footer = () => {
    return ( 
        <footer id="footer" className="bg-white">
        <div className="tcl-container">
          <div className="footer">
            <div className="tcl-row">
                <FooterCreate/>
                <FooterTitle/>
                <FooterContact/>
                <FooterFanpage/>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;