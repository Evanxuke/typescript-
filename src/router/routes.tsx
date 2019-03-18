import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Demo1 from '../demo1/demo1';
import Demo2 from '../demo2/demo2';
import Demo3 from '../demo3/demo3';
import Demo4 from '../demo4/demo4';
import Demo5 from '../demo5/demo5';

const router = (
    <HashRouter>
        <Switch>
            <Route component={Demo1} path="/demo1"></Route>
            <Route component={Demo2} path="/demo2"></Route>
            <Route component={Demo3} path="/demo3"></Route>
            <Route component={Demo4} path="/demo4"></Route>
            <Route component={Demo5} path="/demo5"></Route>
        </Switch>
    </HashRouter>
);

export default router;