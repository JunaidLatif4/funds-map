import React, { useState } from "react";
import "./SearchBox.css";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="search__bar1">
      <span className="bars__icon1">
        <SearchIcon fontSize="large" />
      </span>
      <div className="search__box1">
        <input
          type="text"
          className="search__input1"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          value={search}
        />
        <CloseIcon
          onClick={() => setSearch("")}
          style={{ display: search === "" ? "none" : "inline" }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
