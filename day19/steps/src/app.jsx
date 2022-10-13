import { Component } from "react";
import ChildComp from "./child.component";
import ChildPureComp from "./child.pure.component";

class App extends Component{
    render(){
        return <div>
                    <h1>welcome to your life</h1>
                    <ChildComp/>
                    <ChildPureComp/>
                </div>
    }
}

export default App;