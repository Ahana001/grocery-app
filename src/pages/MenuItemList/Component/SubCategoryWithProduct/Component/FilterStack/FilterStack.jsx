import "./FilterStack.css";

import { useContext } from "react";
import { FaStar } from "react-icons/fa";

import { priceFilter, ratingFilter } from "./constant";
import { DataContext } from "../../../../../../context/DataContext";
import { ActionTypes, Filters } from "../../../../../../reducer/types";

export function FilterStack() {
  const { dispatch } = useContext(DataContext);

  function filterByPriceRangeHanlder(e) {
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
    console.log(e.target.value);
    dispatch({
      type: ActionTypes.ChangeFilter,
      payload: {
        filterType: Filters.Rating,
        filterValue: e.target.value,
      },
    });
  }
  return (
    <div className="FilterContainer">
      <div className="PriceFilterContainer">
        <div className="PriceHeader">Price</div>
        <div className="HorizontalLine"></div>
        <div className="PriceFilterList">
          {priceFilter.map((price) => {
            return (
              <div key={price}>
                <input
                  type="checkbox"
                  value={price}
                  onChange={filterByPriceRangeHanlder}
                />
                <span>{price}</span>
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
                  name="star"
                  value={rating.length}
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
