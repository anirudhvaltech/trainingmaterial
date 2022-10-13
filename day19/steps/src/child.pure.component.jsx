import { PureComponent } from "react";

class ChildPureComp extends PureComponent{
    state = {
        power : 0,
        version : 0
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    setVersionTo100 = ()=>{
        this.setState({
            version : 100
        })
    }
    render(){
        console.log("Child Component was rendered ", Math.random() )
        return <div>
                    <h1>Child Pure Component | Power is { this.state.power } | Version : { this.state.version }</h1>
                    <button onClick={ this.increasePower }>Increase Power</button>
                    <button onClick={ this.setVersionTo100 }>Set Version to 100</button>
                </div>
    }
}

export default ChildPureComp;