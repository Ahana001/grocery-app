import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllMainCategoriesHandler,
  getMainCategoryHandler,
} from "./backend/controllers/MainCategoryController";
import {
  getAllSubCategoriesHandler,
  getSubCategoryHandler,
} from "./backend/controllers/SubCategoryController";
import {
  getAllMenuItemsHandler,
  getMenuItemHandler,
} from "./backend/controllers/MenuItemController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import { main_categories } from "./backend/db/mainCategories";
import { sub_categories } from "./backend/db/subCategories";
import { menu_items } from "./backend/db/menuItems";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      menuItem: Model,
      mainCategory: Model,
      subCategory: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;

      menu_items.forEach((item) => {
        server.create("menuItem", { ...item });
      });

      users.forEach((item) =>
        server.create("user", { ...item, cart: [], wishlist: [] })
      );

      main_categories.forEach((item) =>
        server.create("mainCategory", { ...item })
      );

      sub_categories.forEach((item) =>
        server.create("subCategory", { ...item })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // menu item routes (public)
      this.get("/menu_items", getAllMenuItemsHandler.bind(this));
      this.get("/menu_item/:menuItemId", getMenuItemHandler.bind(this));

      // main categories routes (public)
      this.get("/main_categories", getAllMainCategoriesHandler.bind(this));
      this.get(
        "/main_category/:mainCategoryId",
        getMainCategoryHandler.bind(this)
      );

      // sub categories routes (public)
      this.get("/sub_categories", getAllSubCategoriesHandler.bind(this));
      this.get(
        "/sub_category/:subCategoryId",
        getSubCategoryHandler.bind(this)
      );

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:menuItemId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:menuItemId",
        removeItemFromCartHandler.bind(this)
      );

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:menuItemId",
        removeItemFromWishlistHandler.bind(this)
      );
    },
  });
}
