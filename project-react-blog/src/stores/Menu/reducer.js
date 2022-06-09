import { ACT_MAIN_MENU } from "./action";

const initState = {
  mainMenu: [],
};

const reducer = (menuState = initState, action) => {
  switch (action.type) {
    case ACT_MAIN_MENU:
      return {
        ...menuState,
        mainMenu: action.payload.mainMenu,
      };
    default:
      return menuState;
  }
};

export default reducer;
