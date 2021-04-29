import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

//url to fetch quotes from
const url = "https://type.fit/api/quotes";
//context
const AppContext = React.createContext();
//it will give two things, Provider and Consumer

//initialState
const initialState = {
  loading: true,
  quotes: [],
  index: null,
  error: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //function responsible for fetching Quotes

  const fetchQuotes = async () => {
    const response = await fetch(url);
    const quotes = await response.json();
    dispatch({ type: "QUOTES_FETCHED", payload: quotes });
  };

  //when page renders for the first time, quotes be fetched.
  useEffect(() => {
    fetchQuotes();
  }, []);

  const getNewQuote = () => {
    dispatch({ type: "GET_QUOTE" });
  };

  return (
    <AppContext.Provider value={{ ...state, fetchQuotes, getNewQuote }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
