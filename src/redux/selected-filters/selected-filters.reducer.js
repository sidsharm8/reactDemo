const INITIAL_STATE = [];
const selectedFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      if (!state.includes(action.payload))
        return state.concat([action.payload]);
      else return state;
    case "REMOVE_FILTER":
      return state.filter((value, index) => value !== action.payload);
    default:
      return state;
  }
};

export default selectedFiltersReducer;
