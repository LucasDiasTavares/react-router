import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import About from './About';
import Home from './Home';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/about' component={About} />
          <Route path='/shop/:id' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
