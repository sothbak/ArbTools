import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import classes from './Toolbar.css';

import RacingCalculator from '../../../Containers/Calculator/RacingCalculator/RacingCalculator';
import EarlyPayout from '../../ArbForms/EarlyPayout/EarlyPayout';

const toolbar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <ul>
                    <li>
                        <NavLink to="/earlypayout/" exact>
                            Early Payout Calculator
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact>
                            Racing Calculator
                        </NavLink>
                    </li>
                </ul>
            </header>
            {/* <Switch>
                <Route path="/earlypayout/" component={EarlyPayout} />
                <Route path="/" component={RacingCalculator} />
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch> */}
        </div>
    )
};

export default toolbar;