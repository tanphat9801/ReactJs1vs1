import "../assets/style.css"
import ItemsList from "./ItemsList";
const BudgetIncome = ({dataItems}) => {
    return ( 

        <>
        
            <div className="income">
                <h2 className="icome__title">Income</h2>
                <div className="income__list">
                    {
                        dataItems.map(item => <ItemsList data={item} key={item.id} />)
                    }    
                </div>
            </div>
        
        </>

     );
}
 
export default BudgetIncome;