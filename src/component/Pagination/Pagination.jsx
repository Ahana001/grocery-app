import "./Pagination.css";

import { useState } from "react";

export function Pagination({ data, dataLimit, pageLimit, RenderComponent }) {
  const pages = Math.round(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    if (currentPage === pages || currentPage > pages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  function goToPreviesPage() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  function paginatedData() {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  }

  function paginationGroup() {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const renderData = new Array(pageLimit);

    for (let i = 0; i < renderData.length; i++) {
      let pageNo = start + i + 1;
      renderData[i] = pageNo;
    }
    return renderData;
  }
  return (
    <>
      <div className="PaginationButtonContainer">
        <button onClick={goToPreviesPage} className="PaginationPreviousBtn">
          {"Previous"}
        </button>
        {paginationGroup().map((buttons) => {
          return (
            <button
              key={buttons}
              onClick={changePage}
              style={{
                border:
                  currentPage === buttons
                    ? "0.1rem solid rgb(238, 238, 238)"
                    : "none",
              }}
            >
              {buttons}
            </button>
          );
        })}
        <button onClick={goToNextPage} className="PaginationNextBtn">
          {"Next"}
        </button>
      </div>
      <div className="PaginationMenuItemListContainer">
        {paginatedData().map((val) => {
          return <RenderComponent key={val._id} menuItem={val} width="100px" />;
        })}
      </div>
    </>
  );
}
