const reducer = (state, action) => {
  if (action.type === "QUOTES_FETCHED") {
    let randomIndex = Math.floor(Math.random() * (action.payload.length - 1));
    return {
      ...state,
      quotes: action.payload,
      loading: false,
      index: randomIndex,
      previousIndex: randomIndex,
    };
  }

  //SCREEN SIZE DETECTION only on initial render
  if (action.type === "SMALL_SCREEN_DETECTED") {
    return { ...state, bigScreen: false };
  }
  if (action.type === "GET_QUOTE") {
    let newIndex = Math.floor(Math.random() * (state.quotes.length - 1));
    if (newIndex === state.index) {
      newIndex = state.index + 1;
    }

    return {
      ...state,
      index: newIndex,
      previousIndex: state.index !== null && state.index,
    };
  }

  if (action.type === "GO_BACK_IN_TIME") {
    return {
      ...state,
      index: state.previousIndex,
      previousIndex: state.index,
    };
  }

  return state;
};

export default reducer;
