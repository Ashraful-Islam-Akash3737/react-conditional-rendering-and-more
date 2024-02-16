import  { Component } from 'react'

export default class EventHandlerClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : ''
    }
  }
  
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      changedValue : e.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" name="" id="" />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
