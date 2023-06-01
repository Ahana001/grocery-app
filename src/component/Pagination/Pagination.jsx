import "./Pagination.css";

import { useState } from "react";

export function Pagination({ data, dataLimit, pageLimit, RenderComponent }) {
  const pages = Math.round(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    if (currentPage === pages) {
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
      if (pageNo === pages) {
        break;
      }
    }
    return renderData;
  }
  return (
    <>
      <div className="PaginationMenuItemListContainer">
        {paginatedData().map((val) => {
          return <RenderComponent key={val._id} menuItem={val} width="100px" />;
        })}
      </div>
      <div>
        <button onClick={goToPreviesPage}>Previous</button>
        {paginationGroup().map((buttons) => {
          return (
            <button key={buttons} onClick={changePage}>
              {buttons}
            </button>
          );
        })}
        <button onClick={goToNextPage}>Next</button>
      </div>
    </>
  );
}
