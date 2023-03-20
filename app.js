import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0";

var quotesArr = [
  'A pint of sweat will save a gallon of blood.',
  'A good plan, violently executed now, is better than a perfect plan next week.',
  'Lead me, follow me, or get out my way.',
  'Do everything you ask of those you command.',
  'Say what you mean and mean what you say.',
  'Leaders must be seen up front, up to date, up to their job, and up early in the morning.',
  'When things go wrong in your command, start wading for the reason in increasingly larger concentric circles around your own desk.',
  'We don\'t rise to the level of our expectations, we fall to the level of our training.'
]

var authorsArr = [
  'George S. Patton',
  'George S. Patton',
  'George S. Patton',
  'George S. Patton',
  'George S. Patton',
  'Marcus Sieff',
  'Bruce D. Clark',
  'Archilochus'
]

class DisplayMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currQuote: quotesArr[0], 
      currAuthor: authorsArr[0] 
    }
  }
  
  //updateQuote method to update the displayed quote and author when the button is pressed
  updateQuote() {
    let index = Math.floor(Math.random() * 8);
    let quote = quotesArr[index];
    let author = authorsArr[index];
    this.setState((state) => ({
      currQuote: quote,
      currAuthor: author
    }));
  }
  
  //Render the app to the DOM
  render() {
    return (
      <div id="content">
        <div id="quote-box">
          <div id="text-box">
            <div id="text">{this.state.currQuote}</div>
            <div id="author">- {this.state.currAuthor}</div>
            <div id="button-section">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet Quote!</a>
              <button id="new-quote" onClick={this.updateQuote.bind(this)}>New Quote!</button>
            </div>
          </div>
          <p id="creator">By Colin Hermack</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<DisplayMain/>, document.getElementById('render-node'));
