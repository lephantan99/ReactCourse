import React, { Component } from 'react'

const fetchComment = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
  })

export class RecommendState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    // react có tính năng merge state nên không cần dùng prevState ...prev
    fetchComment().then((res) => {
      this.setState({
        comments: res
      })
    })
  }
  render() {
    return (
      <div>
        <div>RecommendState Count {this.state.count}</div>
        <div>Comments: {this.state.comments.map((x) => x + ', ')}</div>
      </div>
    )
  }
}

export default RecommendState
