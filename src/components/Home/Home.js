import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import logo from '../../logo.svg';

import './Home.css';

const style = {
    width: '60%',
    margin: '20px auto',
    textAlign: 'center',
    padding: 20
};

class Home extends Component {
    render () {
        return (
            <Paper style={style}>
                <div>
                    <div>
                        <h3>Добро пожаловать!</h3>
                    </div>

                    <div>
                        <p>Это небольшое приложение служит для обучения работы с react.</p>
                    </div>
                    <div>
                        <img src={logo} className="Home-logo" />
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Home;
