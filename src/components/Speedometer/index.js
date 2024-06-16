import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    this.setState(prevState => {
      return {count: prevState.count + 10}
    })
  }
  onApplyingBrakes = () => {
    this.setState(prevState => {
      return {count: prevState.count - 10}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <h2 className="heading">Speed is {count}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <button onClick={this.onAccelerate} className="btn1">
          Accelerate
        </button>
        <button onClick={this.onApplyingBrakes} className="btn2">
          Apply Brake
        </button>
      </div>
    )
  }
}
export default Speedometer
