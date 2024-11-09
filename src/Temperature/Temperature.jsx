import React, { Component } from 'react'
import CustomInput from './CustomInput'
import BoilingVerdict from './BoilingVerdict'

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

export class Temperature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: 'c',
      temperature: 0
    }
  }

  handleTemperatureChange = (scale) => (value) => {
    this.setState({
      temperature: Number(value),
      scale
    })
  }

  render() {
    return (
      <div>
        <CustomInput
          title={scaleName.c}
          scale={this.state.scale}
          temperature={this.state.temperature}
          onTemperatureChange={this.handleTemperatureChange('c')}
        />
        <CustomInput
          title={scaleName.f}
          scale={this.state.scale}
          temperature={this.state.temperature}
          onTemperatureChange={this.handleTemperatureChange('f')}
        />
        <BoilingVerdict
          scale={this.state.scale}
          temperature={this.state.temperature}
        />
      </div>
    )
  }
}

export default Temperature
