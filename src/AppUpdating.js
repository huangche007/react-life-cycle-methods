import React from 'react';
import './App.css';
import Counter from './CounterUpdating'

class App extends React.Component{
  state = {
    visible:true,
    ignoreProp:0
  }
  ignoreProp = () =>{
    this.setState({
        ignoreProp:Math.random()
    })
  }
  render(){
    return(
      <div className="App">
        <div style={this.state.visible ? {}:{
          display:"none"
        }}>
          <Counter ignoreProp={this.state.ignoreProp}/>
        </div>
        <button onClick = {this.ignoreProp}>
            Ignore Prop
        </button> 
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
export default App;
