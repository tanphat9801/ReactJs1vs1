import { v4 as uuidv4 } from 'uuid';
import { ACT_DELETE_INCOME } from './action';

const initialState = {

    listData : [
        {
            id: uuidv4(),
            desc: "chi tien mua do an",
            amount: -100000
        },
        {
            id: uuidv4(),
            desc: "thu nhap tien di lam",
            amount: 5000000
        },
        {
            id: uuidv4(),
            desc: "chi tien di choi",
            amount: -200000
        },
        {
            id: uuidv4(),
            desc: "tien thuong du an ",
            amount: 3000000
        }
    ]

}


function reducer (state = initialState , action){
    // console.log( 'action',action);
    // xu li xoa arr filter() 
    switch (action.type) {
        case ACT_DELETE_INCOME:

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
            return{
                ...state,
                listData : state.listData.filter(dataItems =>{
                    if(dataItems.id === action.payload.id ){
                        return false
                    }
                    return true;
                })
                //...state: lay lai nhung gia tri cu nam trong state vi sau nay se co rat nhieu data khac nhau 
                // cach nay se ngan gon hon 
            }
        default:
            return state;
    }
}

export default reducer;
// mot cau truc reudcer co ban 