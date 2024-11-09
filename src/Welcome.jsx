import React from 'react'

// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>
// }

// class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default Welcome
