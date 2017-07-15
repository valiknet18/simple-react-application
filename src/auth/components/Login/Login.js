import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <Paper className="Login-container">
                <div>
                    <h3>Форма авторизации</h3>
                </div>
                <div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Ваш username"
                            type="text"
                        />
                    </div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Ваш password"
                            type="password"
                        />
                    </div>
                </div>
                <div>
                    <RaisedButton label="Авторизация" fullWidth={true} />
                </div>
            </Paper>
        );
    }
}

export default Login;
