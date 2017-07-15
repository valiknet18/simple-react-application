import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class EventDetail extends Component {
    render () {
        return (
            <Dialog
                title="Описание события"
                open={this.props.open}
                modal={false}
                onRequestClose={this.props.handleClose}
            >
                <div>Назва події: {this.props.title}</div>
                <div>Опис події: {this.props.description}</div>
            </Dialog>
        );
    }
}

export default EventDetail;
