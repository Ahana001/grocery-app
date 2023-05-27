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
  addresslist: [],
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
            item_variant: menuItem.item_variant.map((variant) =>
              variant.default
                ? {
                    ...variant,
                    carted: false,
                    selected: true,
                    quantity: 0,
                  }
                : {
                    ...variant,
                    carted: false,
                    selected: false,
                    quantity: 0,
                  }
            ),
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
    case ActionTypes.SetCartList: {
      result = {
        ...state,
        cartlist: action.payload.cart,
      };
      break;
    }
    case ActionTypes.ChangeItem: {
      const changeMenuItemProperties = state.menuItems.map((menu_item) =>
        menu_item._id === action.payload.menuItem._id
          ? action.payload.menuItem
          : menu_item
      );
      return {
        ...state,
        menuItems: [...changeMenuItemProperties],
      };
    }
    case ActionTypes.SetMenuItems: {
      return {
        ...state,
        menuItems: action.payload.menuItems,
      };
    }
    case ActionTypes.SetAddressList: {
      result = {
        ...state,
        addresslist: action.payload.addresslist,
      };
      break;
    }
  }
  return result;
}
