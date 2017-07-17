import React, {Component} from 'react';
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

class LoginForm extends Component {
    render() {
        const { processForm, handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(processForm)} className="LoginForm-container">
                <div>
                    <Field name="username"
                           type="text"
                           className="Contact-fields"
                           label="Ваш username"
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
                    <RaisedButton label="Авторизация" fullWidth={true} type="submit" />
                </div>
            </Form>
        );
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;