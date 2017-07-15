import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Registration extends Component {
    render() {
        return (
            <Paper className="Login-container">
                <div>
                    <h3>Форма регистрации</h3>
                </div>
                <div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Ваше имя"
                            type="text"
                        />
                    </div>
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
                            floatingLabelText="Ваш email"
                            type="email"
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
                    <RaisedButton label="Регистрация" fullWidth={true} />
                </div>
            </Paper>
        );
    }
}

export default Registration;
