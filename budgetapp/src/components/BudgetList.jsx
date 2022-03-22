import "../assets/style.css"
import BudgetIncome from "./BudgetIncome";
import BudgetExpenses from "./BudgetExpenses";
import { useSelector } from "react-redux"
import { totalAmount } from "./helper";
const BudgetList = () => {
    const listData = useSelector(state => state.listData)
    // console.log("check data", listData);
    // const dataIncome = listData.filter(function callbackFn(data){
    // if(data.amount > 0){
    //     return  true;
    // }
    //     return false
    // })
    // })day la phuong thuc binh thuong, loc ra nhung gia tri tha man dieu kien data la 1 item trong arr(listData)

    const dataIncome = listData.filter(DataItems => DataItems.amount > 0)// day la cu phap ngan gon tuong duong cu phap ben tren 
    // console.log(dataIncome);
    const dataExpenses = listData.filter(DataItems => DataItems.amount < 0)

    const totalIncome = totalAmount(dataIncome);

    return ( 

        <>
            <div className="container clearfix">
                <BudgetIncome dataItems={dataIncome} />
                <BudgetExpenses dataItems={dataExpenses} total={totalIncome}/>  
            </div>
          
        </>

     );
}
 
export default BudgetList;

//useseclector se tra ve 1 function se lay state 
