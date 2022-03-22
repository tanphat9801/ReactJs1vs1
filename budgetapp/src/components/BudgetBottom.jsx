import "../assets/style.css"
import BudgetForm from "./BudgetForm";
import BudgetList from "./BudgetList";
const BudgetBottom = () => {
    return ( 
        <div className="bottom">
            <BudgetForm/>
            <BudgetList/>
      </div>

     );
}
 
export default BudgetBottom;