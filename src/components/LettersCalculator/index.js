// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textLength: 0}

  onChangeOfText = event => {
    this.setState({textLength: event.target.value.length})
  }

  render() {
    const {textLength} = this.state
    return (
      <div className="app-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-image"
            alt="letters calculator"
          />
        </div>
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="phrase-container">
            <label for="inputText" className="phrase">
              Enter the phrase
            </label>
            <input
              id="inputText"
              type="text"
              placeholder="Enter the phrase"
              className="input-phrase"
              onChange={this.onChangeOfText}
            />
            <br />
            <p className="text-para">No.of letters: {textLength}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
