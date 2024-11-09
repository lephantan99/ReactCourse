import React from 'react'

const lists = ['BMW', 'HONDA', 'TOYOTA']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
    }
    this.date = '22/11/2024'
    // this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    console.log('ComponentDidMount')
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate')
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
  }

  getTime = () => {
    console.log(this.state)
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  // Lưu ý đối với regular function không có this của riêng nó (tránh nhầm với phương thức trong obj) nên là phải bind this để sử dụng, Ngược lại đối với arrow function không có context thì không có this của riêng nó nên this sẽ được lấy từ bên ngoài state, window, document, etc
  // getTime() {
  //   console.log(this)
  //   this.setState({
  //     time: new Date().toLocaleTimeString()
  //   })
  // }

  render() {
    console.log('render')
    return (
      <div>
        <h1>Bây giờ là {this.state.time.created}</h1>
        <h2>Bây giờ là {this.state.seconds.created}</h2>
        <p id='second'>Bây giờ là {this.state.seconds.created}</p>
        {this.state.darkMode && (
          <p>Có rồi nè {this.state.darkMode.toString()}</p>
        )}
        <button onClick={this.toggleMode}>Toggle</button>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
