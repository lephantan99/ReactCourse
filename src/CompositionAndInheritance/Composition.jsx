import React, { Component, Fragment } from 'react'

class Button extends Component {
  handleClick = (event) => {
    console.log(event.target)
  }
  render() {
    const { className, children } = this.props
    return (
      <button className={`btn ${className || ''}`} onClick={this.handleClick}>
        {`${children || ''} Button`}
      </button>
    )
  }
}

class Layout extends Component {
  render() {
    const { left, right } = this.props
    return (
      <div className='className'>
        <div className='layout-left'>{left}</div>
        <div className='layout-right'>{right}</div>
      </div>
    )
  }
}

export class Composition extends Component {
  render() {
    return (
      <Fragment>
        Composition <Button />
        <Button className='yellow-button'>Yellow</Button>
        <Layout left={<Button className='btn-left'> Left</Button>}></Layout>
        <Layout right={<Button className='btn-right'> Right</Button>}></Layout>
      </Fragment>
    )
  }
}

export default Composition
