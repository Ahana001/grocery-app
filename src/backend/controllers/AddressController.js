import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */
export const getAllAddressHandler = function (schema, request) {
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
    const userAddressList = schema.users.findBy({ _id: userId }).addresslist;
    return new Response(200, {}, { addresslist: userAddressList });
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
 * This handler handles adding address to user's addresslist.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addAddressToAddressListHandler = function (schema, request) {
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
    const userAddressList = schema.users.findBy({ _id: userId }).addresslist;
    let { address } = JSON.parse(request.requestBody);
    address = { ...address, _id: uuid() };
    userAddressList.push({
      ...address,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { addresslist: userAddressList });
    return new Response(201, {}, { addresslist: userAddressList });
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
 * This handler handles removing address from user's addresslist.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeAddressFromAddressListHandler = function (schema, request) {
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
    const addressId = request.params.addressId;
    let userAddressList = schema.users.findBy({ _id: userId }).addresslist;
    userAddressList = userAddressList.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { addresslist: userAddressList });
    return new Response(200, {}, { addresslist: userAddressList });
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
 * This handler handles updating address to user's addresslist.
 * send POST Request at /api/user/address/:addressId
 * body contains {address}
 * */

export const updateAddressFromAddressListHandler = function (schema, request) {
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
    const addressId = request.params.addressId;
    const { address } = JSON.parse(request.requestBody);

    const userAddressList = schema.users.findBy({ _id: userId }).addresslist;
    const updatedUserAddressList = userAddressList.map((savedAddress) => {
      if (savedAddress._id === addressId) {
        return { ...address, updatedAt: formatDate() };
      } else {
        return savedAddress;
      }
    });
    this.db.users.update(
      { _id: userId },
      { addresslist: updatedUserAddressList }
    );
    return new Response(200, {}, { addresslist: updatedUserAddressList });
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
