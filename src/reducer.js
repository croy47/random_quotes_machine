const reducer = (state, action) => {
  if (action.type === "QUOTES_FETCHED") {
    return {
      ...state,
      quotes: action.payload,
      loading: false,
      index: Math.floor(Math.random() * (action.payload.length - 1)),
    };
  }

  if (action.type === "GET_QUOTE") {
    let newIndex = Math.floor(Math.random() * (state.quotes.length - 1));
    if (newIndex === state.index) {
      newIndex = state.index + 1;
    }

    return {
      ...state,
      index: newIndex,
    };
  }

  return state;
};

export default reducer;
