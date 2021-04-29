import React from "react";
import { useGlobalContext } from "./context";
import QuoteContainer from "./QuoteContainer";
import { Loader } from "./Loader";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  return <QuoteContainer />;
}

export default App;
