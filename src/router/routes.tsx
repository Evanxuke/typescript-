import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import Demo1 from '../demo1/demo1';

const router = (
    <HashRouter>
        <Route component={Demo1} path="/demo1"></Route>
    </HashRouter>
);

export default router;