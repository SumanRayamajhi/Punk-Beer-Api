import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, changePage }) {
  //TODO: replace react paginate with a component that does not require pageCount
  // and display just previous, next and the current page number
  // Previous | 1 | Next
  return (
    <div>
    
      <ReactPaginate
        nextLable={"next"}
        previousLable={"previous"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"activeBtn"}
      />
    </div>
  );
}

export default Pagination;
