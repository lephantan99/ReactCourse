import React, { Component } from 'react'

export default class UserClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Helen',
      age: 18
    }
  }

  increaseAge = () => {
    this.setState((prevStage) => ({
      age: prevStage.age + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>User Class Component</h1>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Age: {this.state.age}</li>
        </ul>
        <button onClick={this.increaseAge}>Increase Age</button>
      </div>
    )
  }
}
