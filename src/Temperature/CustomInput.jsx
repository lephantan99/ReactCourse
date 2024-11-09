import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CustomInput extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    scale: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    onTemperatureChange: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    const { value } = event.target
    this.props.onTemperatureChange(value)
  }
  render() {
    let { title, scale, temperature } = this.props
    if (title === 'Celsius' && scale === 'f') {
      temperature = (temperature - 32) / 1.8
    } else if (title === 'Fahrenheit' && scale === 'c') {
      temperature = temperature * 1.8 + 32
    }
    temperature = Math.round(temperature * 1000) / 1000
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input value={temperature} name={title} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default CustomInput
