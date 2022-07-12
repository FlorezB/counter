import React from 'react'

class Counter extends React.Component {
    render () {
        return (
            <div>
                <h2>
                 {this.props.count}
                </h2>
                
                <button className ="btn btn-outline-success" onClick={this.props.substract}> - </button>
                <button className ="btn btn-outline-danger" onClick={this.props.increment}> + </button>
                
            </div>
        )
    }
}

export default Counter
// faire props avec : count increment substract

// count = handleChange
// increment = handleClick
// substract = handleClick2