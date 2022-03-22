import "../assets/style.css"
import { formatAmount } from "./helper";

const TotalAmount = ({amount}) => {
    return ( 

        <>
        
          <div className="budget__value">{formatAmount(amount)}</div>

        </>

     );
}
 
export default TotalAmount;