import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import Main from '../components/Main';

const App =()=>{
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portafolio" exact component={Main} />
        </Switch>
      </BrowserRouter>
    );
    }
    export default App;