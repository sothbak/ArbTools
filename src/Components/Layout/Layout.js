import React, { Component } from 'react';

import Aux from '../../hoc/Auxil';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div>
                    Toolbar
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
