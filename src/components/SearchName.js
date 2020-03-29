  
import React, { useContext } from "react";
import "../styles/SearchName.css";
import EmployeeAreaContext from "../utils/EmployeeAreaContext";

const SearchName = () => {
  const context = useContext(EmployeeAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchName;