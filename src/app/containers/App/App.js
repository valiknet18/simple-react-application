import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../../components/Home/Home';
import Contact from '../../components/Contact/Contact';
import Header from '../../../shared/components/Header/Header';
import LeftMenu from '../../../shared/components/LeftMenu/LeftMenu';
import Login from '../../../auth/components/Login/Login';
import Registration from '../../../auth/components/Registration/Registration';

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className="App">
                <Header handleDrawer={this.handleDrawer} />
                <div>
                    <LeftMenu open={this.state.open} handleDrawer={this.handleDrawer} />
                    <div>
                        <Route exact component={Home} path="/"/>
                        <Route component={Login} path="/login" />
                        <Route component={Registration} path="/registration" />
                        <Route component={Contact} path="/contact"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
