import { ActionTypes } from "./types";

export const initialState = {
  filter: {
    sortByPrice: "",
    currentMainCategory: "",
    currentSubCategory: "",
    rating: 0,
    search: "",
  },
  menuItems: [],
  mainCategories: [],
  subCategories: [],
  wishlist: [],
  cartlist: [],
  orderlist: [],
};
export function DataReducer(state, action) {
  let result;
  switch (action.type) {
    case ActionTypes.InitialFetch: {
      if (action.payload.menuItems) {
        result = {
          ...state,
          menuItems: action.payload.menuItems.map((menuItem) => ({
            ...menuItem,
            carted: false,
            wished: false,
            quantity: 0,
          })),
        };
      }
      if (action.payload.mainCategories) {
        result = {
          ...state,
          mainCategories: [...action.payload.mainCategories],
        };
      }
      if (action.payload.subCategories) {
        result = {
          ...state,
          subCategories: [...action.payload.subCategories],
        };
      }
      break;
    }
    case ActionTypes.ChangeFilter: {
      result = {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
      break;
    }
  }
  return result;
}
