import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/sub_categories
 * */

export const getAllSubCategoriesHandler = function () {
  try {
    return new Response(200, {}, { subCategories: this.db.subCategories });
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
 * send GET Request at /api/user/sub_category/:subCategoryId
 * */

export const getSubCategoryHandler = function (schema, request) {
  const subCategoryId = request.params.subCategoryId;
  try {
    const subCategory = schema.subCategories.findBy({
      _id: subCategoryId,
    });
    return new Response(200, {}, { subCategory });
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
