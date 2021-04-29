import React from 'react';
import './App.css';
import quotes from './quotes.js'


function QuoteText(props) {
  return (
    <q id="text">{props.text}</q>
  );
}


function QuoteAuthor(props) {
  return (
    <p id="author"><em>- {props.author}</em></p>
  );
}

function TweetQuote(props) {
  const href = "https://www.twitter.com/intent/tweet?text=\"" + props.text + "\"%0A- " + props.author;
  return (
    <a id="tweet-quote" href={href} rel="noreferrer" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i> <strong>Share</strong></a>
  );
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes,
      currentQuoteIndex: 0

    };
    this.generateNewQuote = this.generateNewQuote.bind(this);
  }

  generateNewQuote() {
    this.setState(state => {
      const randomIndex = Math.floor(Math.random() * state.quotes.length);

      return {
        currentQuoteIndex: randomIndex
      };
    });
  }

  componentDidMount() {
    this.generateNewQuote();
  }

  render() {
    const quote = this.state.quotes[this.state.currentQuoteIndex];
    const text = quote.text;
    const author = quote.author;
    return (
      <main id="quote-box">
        <QuoteText text={text}/>
        <QuoteAuthor author={author}/>
        <div id="quote-interactive">
          <TweetQuote text={text} author={author}/>
          <button id="new-quote" onClick={this.generateNewQuote}> <strong>New Quote</strong></button>
        </div>
      </main>
    );
  }
}

export default App;
