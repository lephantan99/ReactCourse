import React from 'react'
import PropTypes from 'prop-types'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout
