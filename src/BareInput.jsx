import React from 'react'
import PropTypes from 'prop-types'

export default class BareInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { type: TypeInput, ...rest } = this.props
    return <input {...rest} type={TypeInput} />
  }
}

// export default function BareInput({type, ...rest}) {
//   return <input {...rest} autoFocus />
// }
