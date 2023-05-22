import axios from "axios";

export async function getAllMenuItemRequest() {
  try {
    const response = await axios.get("/api/menu_items");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getParticularMenuItemRequest(id) {
  try {
    const response = await axios.get(`/api/menu_item/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getAllMainCategoriesRequest() {
  try {
    const response = await axios.get("/api/main_categories");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getAllSubCategoriesRequest() {
  try {
    const response = await axios.get("/api/sub_categories");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
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
export async function removeMenuItemFromCartRequest(menuItem, token) {
  try {
    const response = await axios.delete(`/api/user/cart/${menuItem._id}`, {
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
