import "../assets/style.css"
import BudgetIncome from "./BudgetIncome";
import BudgetExpenses from "./BudgetExpenses";
import useBudgetData from "../Hook/useBudgetData";


const BudgetList = () => {
    const {listIncome, listExpenes , totalAmountIncome} = useBudgetData()


    return ( 

        <>
            <div className="container clearfix">
                <BudgetIncome dataItems={listIncome} />
                <BudgetExpenses dataItems={listExpenes} total={ totalAmountIncome}/>  
            </div>
          
        </>

     );
}
 
export default BudgetList;

//useseclector se tra ve 1 function se lay state 
