import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Contact.css';

class Contact extends React.Component {
    render () {
        return (
            <Paper className="Contact-container">
                <div>
                    <h3>Форма отправления сообщения</h3>
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
                            floatingLabelText="Ваш email"
                            type="email"
                        />
                    </div>
                    <div>
                        <TextField
                            className="Contact-fields"
                            floatingLabelText="Текст сообщения"
                            type="text"
                            multiLine={true}
                            rows={1}
                        />
                    </div>
                </div>
                <div>
                    <RaisedButton label="Отправить" fullWidth={true} />
                </div>
            </Paper>
        );
    }
}

export default Contact;
