import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      textAreaValue: '',
      selectValue: 'Coconut',
      checkboxValue: true
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleTextAreaChange = (event) => {
    this.setState({
      textAreaValue: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    })
  }

  handleCheckboxChange = (event) => {
    this.setState({
      checkboxValue: event.target.checked
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit', this.state)
  }

  render() {
    return (
      <div>
        <form name='person' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
          <br />
          <br />
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleTextAreaChange}
          ></textarea>
          <br />
          <br />
          <select
            value={this.state.selectValue}
            onChange={this.handleSelectChange}
          >
            <option value='Apple'>Apple</option>
            <option value='Orange'>Orange</option>
            <option value='Coconut'>Coconut</option>
            <option value='Mango'>Mango</option>
          </select>
          <br />
          {/* Input type file is uncontrolled component */}
          <input type='file' />
          <br />
          <input
            type='checkbox'
            checked={this.state.checkboxValue}
            onChange={this.handleCheckboxChange}
          />
          <br />
        </form>
      </div>
    )
  }
}

export default Form
