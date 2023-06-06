import "./TrendingSearchCard.css";

import { useContext } from "react";

import { DataContext } from "../../../../context/DataContext";
import { ActionTypes, Filters } from "../../../../reducer/types";

export function TrendingSearchCard({ trendingSearch }) {
  const { dispatch } = useContext(DataContext);
  return (
    <div
      className="TrendingSearchCardContainer"
      onClick={() => {
        dispatch({
          type: ActionTypes.ChangeFilter,
          payload: {
            filterType: Filters.Search,
            filterValue: trendingSearch.keyword,
          },
        });
      }}
    >
      <div
        className="TrendingSearchImageContainer"
        style={{ backgroundColor: trendingSearch.color }}
      >
        <img src={trendingSearch.image_url} alt={trendingSearch.keyword} />
      </div>
      <div className="TrendingSearchCardText">{trendingSearch.keyword}</div>
    </div>
  );
}
