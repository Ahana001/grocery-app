import axios from "axios";

export async function getAllMenuItemRequest() {
  try {
    const response = await axios.get("/api/menu_items");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getAllMainCategoriesRequest() {
  try {
    const response = await axios.get("/api/main_categories");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getParticularMainCategoriesRequest(id) {
  try {
    const response = await axios.get(`/api/main_category/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getAllSubCategoriesRequest() {
  try {
    const response = await axios.get("/api/sub_categories");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function loginRequest(email, password) {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 404) {
      return {
        data: { statusText: error.response.data.errors[0] },
        status: 404,
      };
    }
    if (error.response.status === 401) {
      return {
        data: { statusText: error.response.data.errors[0] },
        status: 401,
      };
    }
    console.error(error);
  }
}
export async function signUpRequest(firstName, lastName, email, password) {
  try {
    const response = await axios.post("/api/auth/signup", {
      email,
      password,
      firstName,
      lastName,
    });
    if (response.status === 200 || response.status === 201) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 422) {
      return {
        data: { statusText: error.response.data.errors[0] },
        status: 422,
      };
    }
    console.error(error);
  }
}
export async function addToCartRequest(menuItem, token) {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { menuItem },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function changeCartQuantityRequest(menuItem, token) {
  try {
    const response = await axios.post(
      `/api/user/cart/${menuItem._id}`,
      { menuItem },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function removeMenuItemFromCartRequest(id, token) {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getCartRequest(token) {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function AddAddressToAddressList(address, token) {
  try {
    const response = await axios.post(
      "/api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function updatedAddressToAddressList(updatedAddress, token) {
  try {
    const response = await axios.post(
      `/api/user/address/${updatedAddress._id}`,
      {
        address: updatedAddress,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function removeAddressFromAddressList(id, token) {
  try {
    const response = await axios.delete(`/api/user/address/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function addToWishlistRequest(menuItem, token) {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { menuItem },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function removeFromWishlistRequest(id, token) {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getWishlistRequest(token) {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}
