import React from 'react'
import './App.css';




class App extends React.Component {
  
  constructor () {
    super ()

    this.state = {
      count: 0
    }
  }

  handleClick = () =>

  this.setState({
    count: this.state.count + 1
    // this.count
  })


  handleClick2 = () =>

  this.setState({
    count: this.state.count - 1
    // this.count
  })


  handleChange = e => {
    console.log(e.target)
    const inputValue = e.target.value
    
    this.setState({
      count: inputValue
    })
  }

  render () {
    return (
      <div className="container">
        <h1 className="mb-3">Counter</h1>
        <h2>
          {this.state.count}
        </h2>
        <button className ="btn btn-outline-success" onClick={this.handleClick2}> - </button>
        <button className ="btn btn-outline-danger" onClick={this.handleClick}> + </button>
      </div>
    )
  }
}

export default App;
