import React from 'react';
import Main  from './containers/Main';
import Home  from './containers/Home';
import OrderList  from './containers/OrderList';
import OrderDetail  from './containers/OrderDetail';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="orderlist" component={OrderList}>
              {/* <Route path="orderdetail/:id" component={OrderDetail}/> */}
            </Route>

        </Route>
        <Redirect from="*" to="/" />
    </Router>
);
