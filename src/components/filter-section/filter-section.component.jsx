import React from "react";
import "./filter-section.styles.scss";
import { connect } from "react-redux";

import addFilter from "../../redux/selected-filters/add-filter.actions";
import removeFilter from "../../redux/selected-filters/remove-filter.actions";

const FilterSection = ({
  list,
  title,
  addFilter,
  removeFilter,
  selectedFilters,
}) => {
  const handleChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      addFilter({ filterType: title, value });
    } else {
      removeFilter({ filterType: title, value });
    }
  };
  return (
    <div className="filterSectionContainer">
      <h2 className="filterSectionTitle">{title}</h2>
      <div className="filterSectionList">
        {list.map((item) => (
          <div key={item} className="filterSectionListItem">
            <label>
              <input
                type="checkbox"
                value={item}
                checked={selectedFilters[title].indexOf(item) !== -1}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedFilters: state.selectedFilters,
});
const mapDispatchToProps = (dispatch) => ({
  addFilter: (filter) => dispatch(addFilter({...filter})),
  removeFilter: (filter) => dispatch(removeFilter({...filter})),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
