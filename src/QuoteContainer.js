import React from "react";
import { useGlobalContext } from "./context";
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare } from "react-icons/fa";

const QuoteContainer = () => {
  const { quotes, index, getNewQuote } = useGlobalContext();
  // console.log(index);

  let { text: quote, author } = quotes[index];
  // console.log(quote, author);

  const urlToTweet =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodeURIComponent(quote + author);

  // console.log(urlToTweet);

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
            <a id="tweet-quote" href={urlToTweet} target="_blank">
              <FaTwitterSquare />
            </a>
          </div>

          <button id="new-quote" onClick={getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
      <footer>
        <a href="mailto:croy4744@gmail.com">
          <img
            src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.6435-9/120576091_3360275404068855_8449544771510954797_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3Y7FtInK5EMAX9i7ybe&_nc_ht=scontent.fdel11-2.fna&oh=67d952f49a95ae178637ca9b3e9ca83f&oe=60AF82E5"
            alt="Chandan Roy"
          />
        </a>
        <p>
          <u>Designed by Chandan Roy on 29.04.2021</u>
        </p>{" "}
      </footer>
    </div>
  );
};

export default QuoteContainer;
