import * as types from "./../constant/ActionType";

export const ActCloseForm = () =>{
        return {
            type : types.CLOSE_FORM
        }
}

export const ActOpenForm = () =>{
        return {
            type : types.OPEN_FORM
        }
}

export const ActToggleForm = () =>{
    return {
        type : types.TOGGE_FORM
    }
}

export const ActSort = (orderBy, orderDir) =>{
    return {
        type : types.SORT_ITEMS,
        orderBy,
        orderDir
    }
}
