import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';
import Details from './components/Details'
import Info from './components/Info';

function App() {
  const [menOrWomen, setMenOrWomen] = useState('men');
  const [detailsOpen, setDetailsOpen] = useState(-1);
  const [cart, setCart] = useState([]);

  const navElement = <Nav menOrWomen={menOrWomen} setMenOrWomen={setMenOrWomen} />
  const cartSideBar = <Cart cart={cart} setCart={setCart} />

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/info'>
            {navElement}
            {cartSideBar}
            <Info page='info' />
          </Route>
          <Route path='/faq'>
            {navElement}
            {cartSideBar}
            <Info path='faq' />
          </Route>
          <Route path='/store'>
            <Details
              detailsOpen={detailsOpen}
              setDetailsOpen={setDetailsOpen}
              setCart={setCart}
            />
            {navElement}
            {cartSideBar}
            <Store
              menOrWomen={menOrWomen}
              setDetailsOpen={setDetailsOpen}
            />
          </Route>
          <Route path='/projekt' exact>
            <Home setMenOrWomen={setMenOrWomen} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
