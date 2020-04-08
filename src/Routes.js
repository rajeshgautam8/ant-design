import React, { Component } from 'react';
import {HomePage,BlogPage,DestinationDetailsPage,PackageDetailsPage,TaskPage,AboutPage} from './Pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Routes extends Component {
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/destination" component={DestinationDetailsPage}/>
                    <Route path="/package" component={PackageDetailsPage} />
                    <Route path="/contact" component={TaskPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog" component={BlogPage} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;