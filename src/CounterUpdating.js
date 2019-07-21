import React,{Component} from 'react'

class Counter extends Component{
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
    componentDidMount(){
        console.log('Component Did Mount')
        console.log('---first stage end---')
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && this.props.ignoreProp!==nextProps.ignoreProp){
            console.log('Should Component Update - DO NOT RENDER')
            return false
        }
        console.log('Should Component Update - RENDER')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot Before Update')
        return null
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

}

export default Counter