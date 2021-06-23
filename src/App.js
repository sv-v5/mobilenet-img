import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import MLClassifierUI from 'ml-classifier-ui';
import Header from './components/header'
import Home from './components/Home'
import Predict from './components/Predict'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/predict" exact component={Predict}/>
                    
     </Switch>
      
    </div>
    </Router>
  );
}

export default App;
