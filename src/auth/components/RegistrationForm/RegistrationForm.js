import React, { Component } from 'react';
import { Field, reduxForm, Form } from 'redux-form'
import TextField from 'material-ui/TextField';
import RaisedButton  from 'material-ui/RaisedButton';

const renderTextField = ({
     input,
     label,
     meta: { touched, error },
     ...custom
 }) =>
<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
/>;

class RegistrationForm extends Component {
    render() {
        const { processForm, handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div>
                    <Field name="username"
                           type="text"
                           className="Contact-fields"
                           label="Ваш username"
                           component={renderTextField} />
                </div>
                <div>
                    <Field name="email"
                           type="email"
                           className="Contact-fields"
                           label="Ваш email"
                           component={renderTextField} />
                </div>
                <div>
                    <Field name="password"
                           type="password"
                           className="Contact-fields"
                           label="Ваш password"
                           component={renderTextField} />
                </div>
                <div>
                    <RaisedButton type="submit" label="Регистрация" fullWidth={true} />
                </div>
            </Form>
        );
    }
}

RegistrationForm = reduxForm({
    form: 'registration-form'
})(RegistrationForm);

export default RegistrationForm;
