const defaultState = {orderBy : "name", orderDir : "asc"}; 

const sort = (state = defaultState, action ) => {
    let { orderBy, orderDir} = action;
    switch(action.type){
        case "SORT_ITEMS":
            return {orderBy, orderDir}
        default:
            return state
    }
    
}

export default sort;


