import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getCartItemsHandler = function (schema, request) {
  try {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userCart = schema.users.findBy({ _id: userId }).cart;
    return new Response(200, {}, { cart: userCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {menuItem}
 * */

export const addItemToCartHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userCart = schema.users.findBy({ _id: userId }).cart;
    const { menuItem } = JSON.parse(request.requestBody);
    const findMenuItemInCart = userCart.find(
      (cartMenuItem) => cartMenuItem._id === menuItem._id
    );
    let updatedCart;
    if (!findMenuItemInCart) {
      userCart.push({
        ...menuItem,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      });
      updatedCart = userCart;
    } else {
      updatedCart = userCart.map((cartMenuItem) =>
        cartMenuItem._id === menuItem._id ? menuItem : cartMenuItem
      );
    }

    this.db.users.update({ _id: userId }, { cart: updatedCart });
    return new Response(201, {}, { cart: userCart });
  } catch (error) {
    console.log(error);
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's cart.
 * send DELETE Request at /api/user/cart/:menuItemId
 * */

export const removeItemFromCartHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const menuItemId = request.params.menuItemId;
    let userCart = schema.users.findBy({ _id: userId }).cart;
    userCart = userCart.filter((item) => item._id !== menuItemId);
    this.db.users.update({ _id: userId }, { cart: userCart });
    return new Response(200, {}, { cart: userCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart/:menuItemId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */

export const updateCartItemHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const menuItemId = request.params.menuItemId;
    const { menuItem } = JSON.parse(request.requestBody);

    const userCart = schema.users.findBy({ _id: userId }).cart;
    const updatedCart = userCart.map((cartMenuItem) => {
      if (cartMenuItem._id === menuItemId) {
        return menuItem;
      } else {
        return cartMenuItem;
      }
    });
    this.db.users.update({ _id: userId }, { cart: updatedCart });
    return new Response(200, {}, { cart: updatedCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
