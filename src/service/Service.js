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
