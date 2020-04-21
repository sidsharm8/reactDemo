import { combineReducers } from "redux";

import selectedFiltersReducer from "./selected-filters/selected-filters.reducer";
import searchTextReducer from "./search-text/search-text.reducer";
import sortReducer from "./sort/sort.reducer";

const rootReducer = combineReducers({
  selectedFilters: selectedFiltersReducer,
  searchText: searchTextReducer,
  sortType: sortReducer,
});

export default rootReducer;
