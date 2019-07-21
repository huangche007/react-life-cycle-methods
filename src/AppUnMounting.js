import React from 'react';
import './App.css';
import CounterUnMounting from './CounterUnMounting'

class AppUnMounting extends React.Component{
  state = {
    visible:true
  }

  render(){
    return(
      <div className="App">
        {this.state.visible ? <CounterUnMounting /> : null}
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
export default AppUnMounting;
