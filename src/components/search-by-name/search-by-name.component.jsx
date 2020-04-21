import React from "react";
import "./search-by-name.styles.scss";
import { connect } from "react-redux";
import setSearchText from "../../redux/search-text/search-text.actions";

const SearchByName = ({ setSearchText }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  return (
    <label className="search">
      <span className="searchLabel">Search by Name</span>
      <input type="text" onChange={handleChange} />
    </label>
  );
};

const mapDispactchToProps = (dispatch) => ({
  setSearchText: (search) => dispatch(setSearchText(search)),
});

export default connect(null, mapDispactchToProps)(SearchByName);
