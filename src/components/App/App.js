import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Header from "../../shared/components/Header/Header";
import LeftMenu from "../../shared/components/LeftMenu/LeftMenu";

import './App.css';

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
                        <Route component={Contact} path="/contact"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
