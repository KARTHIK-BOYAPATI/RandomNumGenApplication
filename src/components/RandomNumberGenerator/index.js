import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {currNum: 0}

  genaRandomNumber = () => {
    this.setState(() => ({currNum: Math.floor(Math.random() * 101)}))
  }

  render() {
    const {currNum} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading"> Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            className="button"
            onClick={this.genaRandomNumber}
            type="button"
          >
            Generate
          </button>
          <p className="number">{currNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
