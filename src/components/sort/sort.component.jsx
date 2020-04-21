import React from "react";
import "./sort.styles.scss";
import { connect } from "react-redux";
import setSortType from "../../redux/sort/sort.actions";

const Sort = ({ sortType, setSortType }) => {
  return (
    <div className="sort">
      <label className="sortLabel">
        <select value={sortType} onChange={(event) => {
            setSortType(event.target.value);
        }}>
          <option value="">Sort By ID</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSortType: (sortType) => dispatch(setSortType(sortType)),
});

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
