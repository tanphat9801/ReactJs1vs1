import "../assets/style.css"
import ItemsList from "./ItemsList";
const BudgetExpenses = ({dataItems, total}) => {
    return ( 

        <>
        
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>
                <div className="expenses__list">
                    {
                        dataItems.map(item => <ItemsList data={item} total={total} key={item.id}/>)
                    }
                </div>
            </div>
        
        </>

     );
}
 
export default BudgetExpenses;