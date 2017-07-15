import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import logo from '../../../logo.svg';
import reduxLogo from  '../../../redux-logo.svg';

import './Home.css';

class Home extends Component {
    render () {
        return (
            <Paper className="Home-container">
                <div>
                    <div>
                        <h3>Добро пожаловать!</h3>
                    </div>

                    <div>
                        <p>Это небольшое приложение служит для обучения работы с react + redux.</p>
                    </div>
                    <div>
                        <img src={logo} className="Home-logo" alt="React logo" />
                        <img src={reduxLogo} className="Home-logo Home-redux-logo" alt="Redux logo" />
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Home;
