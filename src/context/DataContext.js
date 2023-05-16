import { useEffect } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { createContext, useReducer, useState } from "react";
import {
  getAllMainCategoriesRequest,
  getAllMenuItemRequest,
} from "../service/Service";
import { ActionTypes } from "../reducer/types";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(false);
  async function FetchInitialData() {
    try {
      setLoader(() => true);
      const menuItemResponse = await getAllMenuItemRequest();
      if (menuItemResponse.status === 200) {
        dispatch({
          type: ActionTypes.InitialFetch,
          payload: { menuItems: menuItemResponse.data.menuItems },
        });
      }
      const mainCategoriesResponse = await getAllMainCategoriesRequest();
      if (mainCategoriesResponse.status === 200) {
        dispatch({
          type: ActionTypes.InitialFetch,
          payload: {
            mainCategories: mainCategoriesResponse.data.mainCategories,
          },
        });
      }
      setLoader(() => false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchInitialData();
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch, loader, setLoader }}>
      {children}
    </DataContext.Provider>
  );
}
