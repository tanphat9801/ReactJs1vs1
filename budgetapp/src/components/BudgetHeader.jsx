import "../assets/style.css"
import BudgerTitle from "./BudgetTitle";
import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpenses from "./TotalExpenses";
import useBudgetData from "../Hook/useBudgetData";

const BudgetHeader = () => {
  const {totalINEX, totalAmountIncome, totalAmountExpenses} = useBudgetData()


    return ( 

        <div className="top">
        <div className="budget">
          <BudgerTitle/>
          <TotalAmount amount={totalINEX} />
          <TotalIncome amount={totalAmountIncome}/>
          <TotalExpenses amount={totalAmountExpenses} total={totalAmountIncome}/>
        </div>
      </div>

     );
}
 
export default BudgetHeader;