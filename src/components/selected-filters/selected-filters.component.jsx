import React from "react";
import "./selected-filters.styles.scss";
import { connect } from "react-redux";

import removeFilter from "../../redux/selected-filters/remove-filter.actions";
const SelectedFilters = ({ filters, removeFilter }) => {
  const filterTypes = Object.keys(filters);
  return (
    <div className="selectedFilterContainer">
      <h2 className="selectedFilterTitle">Selected Filters</h2>
      <div className="selectedFilters">
        {filters &&
          filterTypes.map((filterType) =>
            filters[filterType].map((filter) => (
              <div key={filter} className="selectedFilterLabel">
                {filter}{" "}
                <span
                  className="removeFilter"
                  onClick={() => {
                    removeFilter({ filterType, value: filter });
                  }}
                ></span>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.selectedFilters,
});
const mapDispatchToProps = (dispatch) => ({
  removeFilter: (filter) => dispatch(removeFilter({ ...filter })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);
