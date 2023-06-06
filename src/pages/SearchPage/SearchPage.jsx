import "./SearchPage.css";

import { useContext } from "react";
import { FiTrendingUp } from "react-icons/fi";

import { trending_searches_list } from "./constants";
import { TrendingSearchCard } from "./Component/TrendingSearchCard/TrendingSearchCard";
import { DataContext } from "../../context/DataContext";
import { MenuItemCard } from "../../component/MenuItemCard/MenuItemCard";

export function SearchPage() {
  const { state } = useContext(DataContext);
  const { filter, menuItems } = state;

  let filteredMenuItems = menuItems;
  // const sizesOfChunks = [];
  // for (let i = 2; i < filter.search.length; i++) {
  //   sizesOfChunks.push(i);
  // }
  // const searchChunkStrings = [];
  // for (let i = 0; i < sizesOfChunks.length; i++) {
  //   let startIndex = 0;
  //   for (let j = 0; j < filter.search.length; j++) {
  //     if (
  //       filter.search.slice(startIndex, startIndex + sizesOfChunks[i]) !== ""
  //     ) {
  //       searchChunkStrings.push(
  //         filter.search.slice(startIndex, startIndex + sizesOfChunks[i])
  //       );
  //     }
  //     startIndex = startIndex + sizesOfChunks[i];
  //   }
  // }
  // filteredMenuItems = filteredMenuItems.filter((menuItem) => {
  //   const lowercaseMenuItemName = menuItem.name.toLowerCase();
  //   const includedChunks = searchChunkStrings.filter((chunkStr) =>
  //     lowercaseMenuItemName.includes(chunkStr)
  //   );
  //   return includedChunks.length > 4;
  // });

  filteredMenuItems = filteredMenuItems.filter((menuItem) => {
    const lowercaseMenuItemName = menuItem.name.toLowerCase();
    return lowercaseMenuItemName.includes(filter.search.toLowerCase());
  });
  const filteredInStockedMenuItems = filteredMenuItems.filter((menuItem) => {
    const defaultVarint = menuItem.item_variant.find(
      (variant) => variant.default
    );
    return defaultVarint.in_stock;
  });
  return (
    <>
      <div className="SearchPageContainer">
        <div
          className="TrendingSearchItemList"
          style={{ display: filter.search.length < 2 ? "block" : "none" }}
        >
          <div className="TrendingSearchHeader">
            <div className="TrendingSearchIcon">
              <FiTrendingUp />
            </div>
            <div className="TrendingSearchText">Trending</div>
          </div>
          <div className="TrendingSearchList">
            {trending_searches_list.map((trendingSearch) => {
              return (
                <TrendingSearchCard
                  key={trendingSearch.keyword}
                  trendingSearch={trendingSearch}
                />
              );
            })}
          </div>
        </div>
        {filteredInStockedMenuItems.length > 0 ? (
          <div
            className="SearchedListContainer"
            style={{ display: filter.search.length > 1 ? "block" : "none" }}
          >
            <div className="SerachedListHeader">
              Showing results for &quot;{filter.search} &quot;
            </div>
            <div className="SerachedList">
              {filteredInStockedMenuItems.map((menuItem) => {
                return <MenuItemCard menuItem={menuItem} key={menuItem._id} />;
              })}
            </div>
          </div>
        ) : (
          <div className="NoSearchResultFoundImage">
            <img src="../images/no_search_result.webp" alt="no_search_result" />
            <div className="NoSearchResultFoundText">Nothing here yet</div>
          </div>
        )}
      </div>
    </>
  );
}
