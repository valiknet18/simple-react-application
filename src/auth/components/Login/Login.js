import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../LoginForm/LoginForm';
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

    async handleSave(form) {
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
                <LoginForm processForm={this.handleSave} />
            </Paper>
        );
    }
}

export default Login;
