import logo from './logo.svg';
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component{
constructor(props){
super(props);

this.state = {};
this.circle = React.createRef(null);
}

hoverEvent = (e) => {
  console.log(e.target);
  console.log(this.circle.current);
  this.circle.current.style.background = "yellow";
}

componentDidMount(){
  console.log(this.circle);
  //인자 어떤이벤트, 어떤 행동
  this.circle.current.addEventListener("mouseover",this.hoverEvent);
}

componentWillUnmount() {
  this.circle.current.removeEventListener("mouseover",this.hoverEvent);

}

render() {
return (
<div style={{width: "100vw", height:"100vh", textAlign:"center"}}>
<Text/>
<div style={{margin:"auto", width: "250px", height: "250px", background:"green", borderRadius:"250px"}} ref={this.circle}></div>
</div>
);
}
}

export default App;