import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/menu_items
 * */

export const getAllMenuItemsHandler = function () {
  return new Response(200, {}, { menuItems: this.db.menuItems });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/menu_item/:menuItemId
 * */

export const getMenuItemHandler = function (schema, request) {
  const menuItemId = request.params.menuItemId;
  try {
    const menuItem = schema.menuItems.findBy({ _id: menuItemId });
    return new Response(200, {}, { menuItem });
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
