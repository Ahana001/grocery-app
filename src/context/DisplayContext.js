import { useEffect } from "react";
import { createContext, useState } from "react";
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

  return (
    <DisplayContext.Provider
      value={{
        screenSize,
        FilterPriceRatingDisplay,
        setFilterPriceRatingDisplay,
        dropdownVisibility,
        setDropdownVisibility,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
