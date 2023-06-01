import "./FilterStack.css";

import { useContext } from "react";
import { FaStar } from "react-icons/fa";

import { priceFilter, ratingFilter } from "./constant";
import { DataContext } from "../../../../../../context/DataContext";
import { ActionTypes, Filters } from "../../../../../../reducer/types";
import { RxCross1 } from "react-icons/rx";
import { DisplayContext } from "../../../../../../context/DisplayContext";

export function FilterStack() {
  const { dispatch, state } = useContext(DataContext);
  const { FilterPriceRatingDisplay, setFilterPriceRatingDisplay, screenSize } =
    useContext(DisplayContext);
  function filterByPriceRangeHandler(e) {
    let priceRange = [];
    switch (e.target.value) {
      case "Less than Rs 20": {
        priceRange = { lower: 0, upper: 20 };
        break;
      }
      case "Rs 21 to Rs 50": {
        priceRange = { lower: 21, upper: 50 };
        break;
      }
      case "Rs 51 to Rs 100": {
        priceRange = { lower: 51, upper: 100 };
        break;
      }
      case "Rs 101 to Rs 200": {
        priceRange = { lower: 101, upper: 200 };
        break;
      }
      case "More than Rs 201": {
        priceRange = { lower: 201, upper: 1000000 };
        break;
      }
    }
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.PriceRange,
        filterValue: priceRange,
      },
    });
  }
  function filterByRatingHandler(e) {
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.Rating,
        filterValue: Number(e.target.value),
      },
    });
  }
  function getHumanReadablePriceName({ lower, upper }) {
    if (lower === 0) {
      return "Less than Rs 20";
    } else if (upper === 1000000) {
      return "More than Rs 201";
    } else {
      return `Rs ${lower} to Rs ${upper}`;
    }
  }
  function clearAllFilter() {
    dispatch({
      type: ActionTypes.ReserFilters,
      payload: {
        filter: {
          sortByPrice: "Relevance",
          rating: 1,
          search: "",
          priceRange: [],
        },
      },
    });
  }
  return (
    <div
      className="FilterContainer"
      style={{
        transform: FilterPriceRatingDisplay
          ? "translateX(0)"
          : "translateX(100%)",
      }}
    >
      <div className="ClearAllFilter" onClick={clearAllFilter}>
        Clear All
      </div>
      <div className="PriceFilterContainer">
        <RxCross1
          className="FilterContainerCloseButton"
          onClick={() => setFilterPriceRatingDisplay(false)}
          style={{
            display:
              FilterPriceRatingDisplay && screenSize.width <= 798
                ? "block"
                : "none",
          }}
        />
        <div className="PriceHeader">Price</div>
        <div className="HorizontalLine"></div>
        <div className="PriceFilterList">
          {priceFilter.map((price, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={
                    state.filter.priceRange.find(
                      ({ lower, upper }) =>
                        lower === price.lower && upper === price.upper
                    )
                      ? true
                      : false
                  }
                  onChange={filterByPriceRangeHandler}
                  value={getHumanReadablePriceName(price)}
                />
                <span>{getHumanReadablePriceName(price)}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="RatingFilterContainer">
        <div className="RatingHeader">Rating</div>
        <div className="HorizontalLine"></div>
        <div className="RatingFilterList">
          {ratingFilter.map((rating) => {
            return (
              <div key={rating}>
                <input
                  type="radio"
                  className="star"
                  value={rating.length}
                  checked={state.filter.rating === rating.length ? true : false}
                  onChange={filterByRatingHandler}
                />
                {rating.map((star) => {
                  return (
                    <span key={star} className="Star">
                      <FaStar />
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
