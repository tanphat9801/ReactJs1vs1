import "../assets/style.css"
import { formatAmount, formatPercentAmount } from "./helper";

const ToatalExpenses = ({amount, total}) => {
    return ( 

        <>
        
            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                <div className="budget__expenses--value">{formatAmount(amount)}</div>
                <div className="budget__expenses--percentage">{formatPercentAmount(amount, total)}</div>
                </div>
            </div>
        
        </>

     );
}
 
export default ToatalExpenses;