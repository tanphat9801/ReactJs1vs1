import { ACT_GET_LIST_POST_SYNC } from "./action";


const initState = {
    listPost:[]
}

 function reducer(state = initState, action){
     console.log(action);
    switch (action.type) {
        case ACT_GET_LIST_POST_SYNC:
            return{
                listPost: action.payload.posts
            }
        default:
          return state
    }
}

export default reducer;

