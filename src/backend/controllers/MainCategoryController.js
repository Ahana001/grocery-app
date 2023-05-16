import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/main_categories
 * */

export const getAllMainCategoriesHandler = function () {
  try {
    return new Response(200, {}, { mainCategories: this.db.mainCategories });
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
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/main_category/:id
 * */

export const getMainCategoryHandler = function (schema, request) {
  const mainCategoryId = request.params.mainCategoryId;
  try {
    const mainCategory = schema.mainCategories.findBy({
      _id: mainCategoryId,
    });
    return new Response(200, {}, { mainCategory });
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
