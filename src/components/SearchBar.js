import React from "react";

const SearchBar = ({ searchTerm, handleSearchInput }) => {
  // to display the search items
  //click handler

  return (
    <div className="navbar navbar-light bg-light">
      <div className="d-flex">
        <input
          className="form-control me-2 ms-4"
          type="text"
          placeholder="Search for Beer..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <button className="btn btn-outline-success">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
