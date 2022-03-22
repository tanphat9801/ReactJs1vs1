import "../assets/style.css"
import { useSelector } from "react-redux"
import BudgerTitle from "./BudgetTitle";
import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpenses from "./TotalExpenses";
import { totalAmount } from "./helper";
const BudgetHeader = () => {
  const listData = useSelector(state => state.listData)

  const listlIncome = listData.filter(dataItems => dataItems.amount > 0)
  const listExpenes = listData.filter(dataItems => dataItems.amount < 0)

  const totalAmountIncome = totalAmount(listlIncome)//lay duoc gia tri so duong income 
  const totalAmountExpenses = totalAmount(listExpenes)// lay duoc tat ca gia tri so am expenses 
  // console.log(totalAmountExpenses);
  // console.log(totalAmountIncome);

  const  totalINEX = totalAmountIncome + totalAmountExpenses
  // console.log(TotalAmount );


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