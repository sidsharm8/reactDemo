import React from "react";

import "./App.css";
import FilterPanel from "./components/filter-panel/filter-panel.component";
import SelectedFilters from "./components/selected-filters/selected-filters.component";
import SearchByName from "./components/search-by-name/search-by-name.component";
import CharacterList from "./components/character-list/character-list.component";
import Sort from "./components/sort/sort.component";

function App() {
  return (
    <div className="App">
      <section className="app-filter-panel">
        <FilterPanel />
      </section>
      <section className="app-selected-filters-list">
        <SelectedFilters />
        <SearchByName />
        <Sort />
        <CharacterList />
      </section>
    </div>
  );
}

export default App;
