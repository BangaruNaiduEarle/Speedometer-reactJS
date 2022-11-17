// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  acceleratingSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyingBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="cluster-Image"
        />
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button1"
            type="button"
            onClick={this.acceleratingSpeed}
          >
            Accelerate
          </button>
          <button
            className="button2"
            type="button"
            onClick={this.applyingBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
