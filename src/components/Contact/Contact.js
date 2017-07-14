import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '40%',
    margin: '20px auto',
    padding: 20
};

const fieldStyle = {
    width: '100%'
};

class Contact extends React.Component {
    render () {
        return (
            <div>
                <Paper style={style}>
                    <div>
                        <h3>Форма отправления сообщения</h3>
                    </div>
                    <div>
                        <div>
                            <TextField
                                style={fieldStyle}
                                floatingLabelText="Ваше имя"
                                type="text"
                            />
                        </div>
                        <div>
                            <TextField
                                style={fieldStyle}
                                floatingLabelText="Ваш email"
                                type="email"
                            />
                        </div>
                        <div>
                            <TextField
                                style={fieldStyle}
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
            </div>
        );
    }
}

export default Contact;
