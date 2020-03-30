import React, { Component } from 'react';
import Home from './Home/MainHome';
import DestinationDetail  from './Pages/DestinationDetail';
import PackageDetail  from './Pages/PackageDetail';
import Task from './Pages/Task';
import About from './Pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Routes extends Component {
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/destination" component={DestinationDetail}/>
                    <Route path="/package" component={PackageDetail} />
                    <Route path="/contact" component={Task} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        );
    }
}
 
export default Routes;