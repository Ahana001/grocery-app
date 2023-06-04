import { v4 as uuid } from "uuid";
import { createContext, useState, useCallback, useEffect } from "react";

export const DisplayContext = createContext();

export function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function DisplayContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [FilterPriceRatingDisplay, setFilterPriceRatingDisplay] =
    useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    if (screenSize.width <= 798) {
      setFilterPriceRatingDisplay(false);
    } else {
      setFilterPriceRatingDisplay(true);
    }
  }, [screenSize]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  function showToast(type, title, description) {
    let color = "#34d39d";
    let backgroundColor = "#ebfbf6";
    switch (type) {
      case "info": {
        color = "#01d0e9";
        backgroundColor = "#e6fafd";
        break;
      }
      case "success": {
        color = "#34d39d";
        backgroundColor = "#ebfbf6";
        break;
      }
      case "warning": {
        color = "#ef4e61";
        backgroundColor = "#fdedee";
        break;
      }
    }
    setToastList(() => [
      ...toastList,
      {
        id: uuid(),
        title,
        description: description,
        color,
        backgroundColor,
        type,
      },
    ]);
  }
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setToastList(toastListItem);
    },
    [toastList, setToastList]
  );

  return (
    <DisplayContext.Provider
      value={{
        screenSize,
        FilterPriceRatingDisplay,
        setFilterPriceRatingDisplay,
        dropdownVisibility,
        setDropdownVisibility,
        toastList,
        deleteToast,
        showToast,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
