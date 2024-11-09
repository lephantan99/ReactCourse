import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class BoilingVerdict extends Component {
  static propTypes = {
    scale: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
  }
  render() {
    const { scale, temperature } = this.props
    return (
      <div>
        The water would
        {temperature >= 100 && scale === 'c'
          ? ' boil'
          : temperature >= 212 && scale === 'f'
            ? ' boil'
            : ' not boil'}
      </div>
    )
  }
}

export default BoilingVerdict
