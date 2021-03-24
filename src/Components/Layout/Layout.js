import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxil';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import RacingCalculator from '../../Containers/Calculator/RacingCalculator/RacingCalculator';
import EarlyPayout from '../../Containers/Calculator/AFLCalculator/AFLCalculator';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <div>
                    SideDrawer
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Switch>
                    <Route path="/earlypayout/" component={EarlyPayout} />
                    <Route path="/" component={RacingCalculator} />
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </Aux>
        )
    }
}

export default Layout;
