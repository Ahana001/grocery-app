import { formatDate, requiresAuth } from "../utils/authUtils";

export const addOrderToOrderlistHandler = function (schema, request) {
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
    const userOrderlist = schema.users.findBy({ _id: userId }).orderlist;
    const { order } = JSON.parse(request.requestBody);
    userOrderlist.push({
      ...order,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { orderlist: userOrderlist });
    return new Response(201, {}, { orderlist: userOrderlist });
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

export const getOrderlistHandler = function (schema, request) {
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
    const userOrderlist = schema.users.findBy({ _id: userId }).orderlist;
    return new Response(200, {}, { orderlist: userOrderlist });
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
