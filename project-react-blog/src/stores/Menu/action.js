import { mappingMainMenu } from "../../Helper";
import { menuService } from "../../services/menu";

export const ACT_MAIN_MENU = "ACT_MAIN_MENU";

export const actMainMenu = (mainMenu) => {
  return {
    type: ACT_MAIN_MENU,
    payload: {
      mainMenu,
    },
  };
};

export const actMainMenuAsync = () => {
  return async (dispatch) => {
    try {
      const response = await menuService.getAll();
      const mainMenu = response.data.items.map(mappingMainMenu); //helper
      dispatch(actMainMenu(mainMenu));
    } catch (error) {
      console.log(error);
    }
  };
};
