let defaultState = [
];

let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = ( tasks !== null && tasks.length > 0 ) ? tasks : defaultState;


const items = (state = defaultState , action) =>{

    switch(action.type){
        case "CLOSE_FORM":
            state = false;
            return state;

        case "OPEN_FORM":
            state = true;
            return state;  

        case "TOGGLE_FORM":
            state = !state;
            return state;

        default:
            return state
    }

}

export default items;