import {Route} from "react-router-dom"
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
        <Route path='/' exact component={Home}/>
     <Route path='/detail/:days' exact component={Detail}/>
    </div>
  );
}
export default App;
