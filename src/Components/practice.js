import { Component } from "react";

class Practice extends Component{

    constructor(){
        super();
        console.log("1.constructor is called");
        this.state = {
            counter:1,
            heading:"Hello Word!!",
            inputText:""
        };
    }
    handleClick(){
        let localCounter=this.state.counter;
        this.setState({
            counter: localCounter+1,
            heading:"Learning React"
        })
    }
    static getDerivedStateFromProps(){
        console.log("2. getDerivedStateFromProps is called");
        return null;
    }
    render(){
        console.log("3. render is called");
        return(
            <>
                <h1>{this.state.heading}</h1>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
                <p>{this.state.counter}</p>
            </>
        )
    }

    componentDidMount(){
        console.log("4.componentDidMount is called");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
}

export default Practice