import React from 'react';
import './App.css';
import CounterMounting from './CounterMounting'

class AppMounting extends React.Component{
  state = {
    visible:true
  }

  render(){
    return(
      <div className="App">
        <div style={this.state.visible ? {}:{
          display:"none"
        }}>
          <Counter />
        </div>
        <button onClick={()=>{
          this.setState({
            visible:!this.state.visible
          })
        }}>
          toggle counter
        </button>
      </div>
    )
  }
}
export default AppMounting;
