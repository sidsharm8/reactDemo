import React from "react";
import { debounce, throttle } from "lodash";
import "./character-list.styles.scss";
import CharacterCard from "../character-card/character-card.component";
import { connect } from "react-redux";

const API_URL = "https://rickandmortyapi.com/api/character/";
const nonOtherSpecies = ["Human", "Mytholog"];
const nonOtherOrigins = ["Uknown", "Post-Apocalyptic Earth", "Nuptia 4"];
class CharacterList extends React.Component {
  nextUrl = null;
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      /* url :  */
    };
  }
  componentDidMount() {
    /* debounce this function to prevent unnecessary function calls on search and filter change */
    this.debouncedFetchData = debounce(this.fetchData.bind(this), 500);
    this.debouncedFetchData();
    /* throttle scroll event for lazy loading list */
    this.throttledHandleOnScroll = throttle(
      this.handleOnScroll.bind(this),
      500
    );
    setTimeout(() => {
      window.addEventListener("scroll", this.throttledHandleOnScroll);
    }, 1000);
  }
  componentDidUpdate({ selectedFilters, searchText, sortOrder }) {
    // Typical usage (don't forget to compare props):
    if (
      this.props.selectedFilters === selectedFilters ||
      this.props.searchText === searchText ||
      this.props.sortOrder === sortOrder
    ) {
      return false;
    }
  }
  generateQueryString() {
    let query = [];
    if (this.props.searchText) {
      query.push(`name=${this.props.searchText}`);
    }
    /*  if(this.props.selectedFilters.species.length){
      query.push(`species=${this.props.selectedFilters.species.join("&species=")}`);
    }
    if(this.props.selectedFilters.gender.length){
      query.push(`gender=${this.props.selectedFilters.gender.join("&gender=")}`);
    } */
    return `?${query.join("&")}`;
  }
  fetchData(url = API_URL) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        /* store url of next page for lazy loading api call */
        if (data.info && data.info.next) this.nextUrl = data.info.next;
        else this.nextUrl = null;
        this.setState((prevState) => {
          return {
            characterList: prevState.characterList.concat(data.results || []),
          };
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  sortList(list) {
    return this.filterList(list).sort((a, b) => {
      if (!this.props.sortOrder || this.props.sortOrder === "ascending")
        return a.id - b.id;
      else return b.id - a.id;
    });
  }
  filterList(list) {
    const { species, gender, origin } = this.props.selectedFilters;
    const { searchText } = this.props;
    if (species.length || gender.length || origin.length || searchText) {
      return list.filter((item) => {
        if (
          (!searchText
            ? true
            : item.name.toLowerCase().includes(searchText.toLowerCase())) &&
          (!species.length
            ? true
            : species.includes(item.species) ||
              (species.includes("Other Species...") &&
                !nonOtherSpecies.includes(item.species))) &&
          (!gender.length ? true : gender.includes(item.gender)) &&
          (!origin.length
            ? true
            : origin.includes(item.origin.name) ||
              (origin.includes("Other Origins...") &&
                !nonOtherOrigins.includes(item.species)))
        )
          return true;

        return false;
      });
    } else {
      return list;
    }
  }
  handleOnScroll() {
    /* user has scrolled to the bottom of the page */
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      if (this.nextUrl) this.debouncedFetchData(this.nextUrl);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledHandleOnScroll);
  }
  render() {
    const characterList = this.sortList(this.state.characterList);
    return (
      <div className="characterList">
        {characterList.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilters: state.selectedFilters,
  searchText: state.searchText,
  sortOrder: state.sortType,
});

export default connect(mapStateToProps)(CharacterList);
