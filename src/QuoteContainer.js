import React from "react";
import { useGlobalContext } from "./context";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteContainer = () => {
  const { quotes, index, getNewQuote, getPreviousQuote, bigScreen } =
    useGlobalContext();
  // console.log(index);

  let { text: quote, author } = quotes[index];
  // console.log(quote, author);

  const urlToTweet =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    encodeURIComponent(quote + "-" + author);

  return (
    <div className="container">
      <div id="quote-box">
        <blockquote id="text">
          <FaQuoteLeft />
          <p id="quote">{quote}</p>
          <FaQuoteRight />
          <cite id="author">
            <b>{author}</b>
          </cite>
        </blockquote>

        <div className="buttons">
          <div className="icons">
            <a
              className="quote-btn"
              href={urlToTweet}
              target="_blank"
              rel="noreferrer"
            >
              Tweet This
            </a>
          </div>

          <div id="changeQuote-btn">
            <button
              id="prev-quote"
              className="quote-btn"
              onClick={getPreviousQuote}
            >
              {`${bigScreen ? "Previous Quote" : "Previous"}`}
            </button>
            <button id="new-quote" className="quote-btn" onClick={getNewQuote}>
              {`${bigScreen ? " Next Quote" : "Next"}`}
            </button>
          </div>
        </div>
      </div>
      <footer>
        <a href="mailto:croy4744@gmail.com">
          <img
            src="https://avatars.githubusercontent.com/u/77880663?v=4"
            alt="Chandan Roy"
          />
        </a>
        <p>
          <u>Designed by Chandan Roy on 29.04.2021</u>
        </p>{" "}
        <p>
          <a
            href="https://github.com/croy47/random_quotes_machine"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Source Code
          </a>
        </p>
      </footer>
    </div>
  );
};

export default QuoteContainer;
