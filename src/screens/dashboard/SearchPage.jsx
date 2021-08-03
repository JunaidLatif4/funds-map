import React, { useState } from "react";
import Backarrow from "../../components/backarrow/Backarrow";
import PopularSearches from "./components/popular-searches/PopularSearches";
import RaiseRequest from "./components/raise-request/RaiseRequest";
import SearchBox from "./components/search-box/SearchBox";
import "./SearchPage.css";

const SearchPage = () => {
  const [popularSearch, setPopularSearch] = useState(false);
  const [raiseRequest, setRaiseRequest] = useState(true);
  return (
    <div className="search__page">
      <Backarrow />
      <SearchBox />
      {popularSearch && <PopularSearches />}
      {raiseRequest && <RaiseRequest />}
    </div>
  );
};

export default SearchPage;
