import { ActionTypes, Filters } from "./types";

export const initialState = {
  filter: {
    sortByPrice: "Relevance",
    currentSubCategory: "",
    rating: 1,
    search: "",
    priceRange: [],
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
      if (action.payload.filterType === Filters.PriceRange) {
        const findItemInState = state.filter.priceRange.find(
          (range) => range.lower === action.payload.filterValue.lower
        );
        if (findItemInState) {
          const removedItemFromState = state.filter.priceRange.filter(
            ({ lower }) => lower !== action.payload.filterValue.lower
          );
          result = {
            ...state,
            filter: {
              ...state.filter,
              [action.payload.filterType]: removedItemFromState,
            },
          };
        } else {
          result = {
            ...state,
            filter: {
              ...state.filter,
              [action.payload.filterType]: [
                ...state.filter.priceRange,
                action.payload.filterValue,
              ],
            },
          };
        }
      } else {
        result = {
          ...state,
          filter: {
            ...state.filter,
            [action.payload.filterType]: action.payload.filterValue,
          },
        };
      }
      break;
    }
  }
  return result;
}
