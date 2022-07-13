import React from 'react'
import './App.css';
import Counter from './components/Counter'


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
  })


  handleClick2 = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  
  render () {
    
    console.log(this)
    return (
      <div className="container">
        <h1 className="mb-3">Counter</h1>
        <Counter count={this.state.count} increment={this.handleClick} substract={this.handleClick2}/>
      </div>
    )
  }
}

export default App;