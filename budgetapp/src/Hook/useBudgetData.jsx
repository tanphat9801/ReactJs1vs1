import { useEffect } from "react";
import { useSelector } from "react-redux"
import { totalAmount } from "../components/helper";

    function useBudgetData(){
        const listData = useSelector(state => state.listData)
        const listIncome = listData.filter(dataItems => dataItems.amount > 0)
        const listExpenes = listData.filter(dataItems => dataItems.amount < 0)
        const totalAmountIncome = totalAmount(listIncome)
        const totalAmountExpenses = totalAmount(listExpenes)
        const totalINEX = totalAmountIncome + totalAmountExpenses
        //lang nghe su thay doi 
        useEffect(()=>{
            localStorage.setItem("listBudget", JSON.stringify(listData))
        }, [listData])
        

        return{
            listIncome,
            listExpenes,
            totalAmountIncome,
            totalAmountExpenses,
            totalINEX
        }
    }


export default useBudgetData
