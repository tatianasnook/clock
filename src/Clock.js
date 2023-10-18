import { Component } from 'react';

export class Clock extends Component{
  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount(){
    this.timeId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeId)
  }

  tick(){
    this.setState({time: new Date().toLocaleTimeString()})
  }

  render(){
    return(
      <div className='clock'>
        <h3>{this.state.time}</h3>
      </div>
    )
  }
}




