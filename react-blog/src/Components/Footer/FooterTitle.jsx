import "./footer.css"
const FooterTitle = () => {
    return ( 
        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
        <div className="footer-title">
          <p>Categories</p>
        </div>
        <ul className="footer-content__list">
          <li><a href="/">ReactJs</a></li>
          <li><a href="/">Javascript</a></li>
          <li><a href="/">Angular</a></li>
          <li><a href="/">HTML, HTML5</a></li>
        </ul>
      </div>
     );
}
 
export default FooterTitle;