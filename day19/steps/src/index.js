import { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

/* 
var avengers = ['Ironman','Hulk','Thor'];

var avengersList = <ol>
                        <li>{ avengers[0] }</li>
                        <li>{ avengers[1] }</li>
                        <li>{ avengers[2] }</li>
                    </ol> 
*/

/*
var AvengersList = function(){
    let avengers = ['Ironman','Hulk','Thor'];
    return <ol>{
        avengers.map(function(val, idx){
            return <li key={idx}>{ val }</li>
        })
    }
    </ol> 
}
*/

class AvengersList extends Component{
    avengers = ['Ironman','Hulk','Thor','Vision'];
    render(){
        return <ol>{
                this.avengers.map(function(val, idx){
                    return <li key={idx}>{ val }</li>
                })
            }</ol>
    }
}



// .render( avengersList );
createRoot(document.getElementById("root")).render(<AvengersList/>);


// http://p.ip.fi/au6t