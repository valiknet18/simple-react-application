import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { loginUser } from '../../actions/users';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleProcessField = this.handleProcessField.bind(this);
    }

    handleSave() {
        let form = this.state;
        let { dispatch } = this.props;

        dispatch(loginUser(form));
    }

    handleProcessField(field, e) {
        let form = this.state;
        form[field] = e.target.value;

        this.setState(form);
    }

    render() {
        const isLogged = !this.props.profile ? <div>Unlogged</div> : <div>{this.props.profile.username}</div>;

        return (
            <Paper className="Login-container">
                {isLogged}
                <div>
                    <h3>Форма авторизации</h3>
                </div>
                <div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Ваш username"
                            onChange={this.handleProcessField.bind(this, 'username')}
                            type="text"
                        />
                    </div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Ваш password"
                            onChange={this.handleProcessField.bind(this, 'password')}
                            type="password"
                        />
                    </div>
                </div>
                <div>
                    <RaisedButton label="Авторизация" fullWidth={true} onTouchTap={this.handleSave} />
                </div>
            </Paper>
        );
    }
}

export default Login;
