import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Admin from './pages/Admin';
import './App.css';

const App = () => (
    <ProductProvider>
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/shop" component={Products} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    </ProductProvider>
);

export default App;