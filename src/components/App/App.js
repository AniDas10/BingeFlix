import React from 'react';
//BrowserRouter doesnt work while deploying, it needs further working on it (Works smoothly in localhost)
//HACK - Just replace BrowserRouter with HashRouter, one word substituion, it works like magic!
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';

const App=()=>{
  return(
    <HashRouter>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
}
export default App;
