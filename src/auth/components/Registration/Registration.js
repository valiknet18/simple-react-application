import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(form) {
        console.log(form);
    }

    render() {
        return (
            <Paper className="Login-container">
                <div>
                    <h3>Форма регистрации</h3>
                </div>
                <RegistrationForm processForm={this.handleSave} />
            </Paper>
        );
    }
}

export default Registration;
