import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EventForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            startDate: '',
            endDate: ''
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
    }

    handleFieldChange(field, event) {
        let form = this.state;
        form[field] = event.target.value;

        this.setState(form);
    }

    handleSaveEvent() {
        this.props.handleSaveEvent(this.state);
        this.state = {
            title: '',
            description: '',
            startDate: '',
            endDate: ''
        };
    }

    render() {
        const actions = [
            <RaisedButton label="Сохранить" fullWidth={true} onTouchTap={this.handleSaveEvent} />
        ];

        return (
            <Dialog
                title="Добавление нового события"
                open={this.props.open}
                modal={false}
                actions={actions}
                onRequestClose={this.props.handleClose}
            >
                <div>
                    <TextField
                        className="Contact-fields"
                        type="text"
                        floatingLabelText="Название"
                        value={this.state.title}
                        onChange={this.handleFieldChange.bind(this, 'title')}
                    />
                </div>

                <div>
                    <TextField
                        className="Contact-fields"
                        type="text"
                        floatingLabelText="Описание события"
                        multiLine={true}
                        value={this.state.description}
                        onChange={this.handleFieldChange.bind(this, 'description')}
                    />
                </div>

                {/*<div>Дата начала: {this.props.startDate}</div>*/}
                {/*<div>Дата конца: {this.props.endDate}</div>*/}
            </Dialog>
        );
    }
}

export default EventForm;
