import React, { Component, createRef } from 'react'

export class UnControlledComponent extends Component {
  constructor(props) {
    super(props)

    this.input = createRef()
    this.fileInput = createRef()
    this.state = {
      selectFile: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('myFile', this.state.selectFile, this.state.selectFile.name)
    // axios.post('api/uploadFile', formData)
  }

  onFileChange = (event) => {
    this.setState({
      selectFile: event.target.files[0]
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type='text' ref={this.input} id='name' />
          </label>
          <br />
          <br />
          <input
            type='file'
            name='avatar'
            ref={this.fileInput}
            onChange={this.onFileChange}
          />
          <br />
          <br />
          <input type='submit' submit='true' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default UnControlledComponent
