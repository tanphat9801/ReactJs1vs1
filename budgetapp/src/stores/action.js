// action type 
const ACT_ADD_INCOME = 'ACT_ADD_INCOME'
export const ACT_DELETE_INCOME = 'ACT_DELETE_INCOME'

//action creator 

export function actAddIncome (){
    return{

        type: ACT_ADD_INCOME,
        payload: null

    }
}

// action delete 
export function actDeleteById(id){
    console.log("check id", id);
    // khi click item thi action se duoc dispatch tu ben item va truyen vao ben action 
    // sau khi duoc goi thi action se dieu huong sang reducer 
    return{

        type: ACT_DELETE_INCOME,
        payload:{
            id// => id : id
        }

    }

}