import { v4 as uuidv4 } from "uuid";
import { ACT_DELETE_INCOME, ACT_ADD_INCOME } from "./action";

function getDataFromLocalStorage(){
  try{
    const dataFormLocalStorage = localStorage.getItem("listBudget") || []
    return JSON.parse(dataFormLocalStorage)
  }catch(err){
    return []
  }
}

const initialState = {
  listData: getDataFromLocalStorage()
}

function reducer(state = initialState, action) {
  // console.log( 'action',action);
  // xu li xoa arr filter()
  switch (action.type) {
    case ACT_DELETE_INCOME:
      return {
        ...state,
        listData: state.listData.filter((dataItems) => {
          if (dataItems.id === action.payload.id) {
            return false;
          }
          return true;
        }),
        //...state: lay lai nhung gia tri cu nam trong state vi sau nay se co rat nhieu data khac nhau
        // cach nay se ngan gon hon
      };
    case ACT_ADD_INCOME:
      console.log("action", action);
      const desData = action.payload.data;
      const newIncomeItems = {
        id: uuidv4(),
        desc: desData.desc,
        amount: desData.sign === "+" ? desData.amount : desData.amount * -1,
        date: desData.date,
      };
      return {
        ...state,
        listData: [...state.listData, newIncomeItems],
      };
    default:
      return state;
  }
}

export default reducer;
// mot cau truc reudcer co ban

// const idDelete = action.payload.id
// const dataIncomeAfterDelete = state.listData.filter(dataItems =>{
//     if(dataItems.id === idDelete ){
//         return false
//     }
//     return true;
// }) cach nay la cach binh thuong

// console.log(dataIncomeAfterDelete);
// console.log("data tuoc khi delete", state.listData);
// console.log("check id action payload", idDelete);
// console.log("data sau khi xoa", dataIncomeAfterDelete);
