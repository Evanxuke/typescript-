import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Demo1 from '../demo1/demo1';
import Demo2 from '../demo2/demo2';
import Demo3 from '../demo3/demo3';

const router = (
    <HashRouter>
        <Switch>
            <Route component={Demo1} path="/demo1"></Route>
            <Route component={Demo2} path="/demo2"></Route>
            <Route component={Demo3} path="/demo3"></Route>
        </Switch>
    </HashRouter>
);

export default router;