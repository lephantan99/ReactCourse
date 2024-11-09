import React from 'react'

class BareButton extends React.Component {
  handleClick = (value) => () => {
    console.log(value)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick('add')}>Add</button>
        <button onClick={this.handleClick('edit')}>Edit</button>
        <button onClick={this.handleClick('delete')}>Delete</button>
      </div>
    )
  }
}

export default BareButton
