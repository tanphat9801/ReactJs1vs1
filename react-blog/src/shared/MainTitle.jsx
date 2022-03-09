import "./maintitle.css";
import cls from 'classnames';
import Button from "./Button";

const MainTitle = (
  {
    children,
    btnProps,
    btnLabel = {}
  }) => {

    const classes = cls("main-title spacing",{
      "d-flex tcl-jc-between tcl-ais-center" : btnLabel
    })

    return ( 
      <div className={classes}>
        <h2>{children}</h2>
        {btnLabel && <Button  {...btnProps}>{btnLabel}</Button> }
      </div>
     );
}
 
export default MainTitle;

