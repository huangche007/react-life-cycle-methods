import React,{Component} from 'react'

class CounterUnMounting extends Component{
    constructor(){
        console.log('---First Stage Start---')
        super()
        this.state = {
            count:0
        }
        console.log('1-->>constructor')
       
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("2-->>Get Dervied State From Props")
        return <div/>
    }
    increment = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrement = () =>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        console.log('3-->>Render')
        return(
            <div>
                <div>count:{this.state.count}</div>
                <button onClick={this.increment}>
                increment
                </button>
                <button onClick={this.decrement}>
                decrement
                </button>
            </div>
        )
    }
    componentWillUnmount(){
        console.log('Component Will Unmount')
    }
    componentDidMount(){
        console.log('Component Did Mount')
        console.log('---first stage end---')
    }

}

export default CounterUnMounting