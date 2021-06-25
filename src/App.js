import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { MyContext } from './context';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';
import Details from './components/Details';
import Info from './components/Info';

function App() {
  const [menOrWomen, setMenOrWomen] = useState('men');
  const [detailsOpen, setDetailsOpen] = useState(-1);
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider
      value={{
        menOrWomen,
        setMenOrWomen,
        detailsOpen,
        setDetailsOpen,
        cart,
        setCart
      }}
      className='App'
    >
      <Router>
        <Switch>
          <Route path='/projekt/info'>
            <Nav />
            <Cart />
            <Info page='info' />
          </Route>
          <Route path='/projekt/faq'>
            <Nav />
            <Cart />
            <Info page='faq' />
          </Route>
          <Route path='/projekt/store'>
            <Details />
            <Nav />
            <Cart />
            <Store />
          </Route>
          <Route path='/projekt' exact>
            <Home setMenOrWomen={setMenOrWomen} />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
