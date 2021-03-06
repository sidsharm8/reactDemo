import React from "react";
import "./filter-panel.styles.scss";
import FilterSection from "../filter-section/filter-section.component";

const filters = [
  {
    title: "species",
    list: ["Human", "Mytholog", "Other Species..."],
  },
  {
    title: "gender",
    list: ["Male", "Female"],
  },
  {
    title: "origin",
    list: ["Unknown", "Post-Apocalyptic Earth", "Nuptia 4", "Other Origins..."],
  },
];
const FilterPanel = () => {
  return (
    <div className="filterPanelContainer">
      <header className="filterPanelHeader">
        <h2>Filters</h2>
      </header>
      {filters.map(({ title, list }) => (
        <FilterSection key={title} title={title} list={list} />
      ))}
    </div>
  );
};

export default FilterPanel;
