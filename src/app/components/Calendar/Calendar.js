import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import { DragDropContext } from 'react-dnd'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import HTML5Backend from 'react-dnd-html5-backend'
import EventForm from '../EventForm/EventForm';
import EventDetail from '../EventDetail/EventDetail';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

let events = [
    {
        startDate: new Date(2017, 6, 15, 10, 0, 0),
        endDate: new Date(2017, 6, 15, 13, 0, 0),
        title: 'First event'
    }
];

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            openEventDetail: false,
            form: {
                start: '',
                end: ''
            },
            eventDetail: {
                title: '',
                description: ''
            }
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleSelectSlot = this.handleSelectSlot.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleSelectEvent = this.handleSelectEvent.bind(this);
    }

    handleClose(field) {
        let state = this.state;
        state[field] = false;

        this.setState(state);
    }

    handleSelecting({start, end, event}) {
        event.startDate = start;
        event.endDate = end;
    }

    handleSelectSlot({start, end}) {
        let form = {};
        form['startDate'] = new Date(start);
        form['endDate'] = new Date(end);

        this.setState({
            open: true,
            form: form
        })
    }

    handleSelectEvent(event) {
        let eventDetail = {
            title: event.title,
            description: event.description
        };

        this.setState({
            openEventDetail: true,
            eventDetail: eventDetail
        });
    }

    handleSaveEvent(form) {
        console.log(form);

        form.startDate = this.state.form.startDate;
        form.endDate = this.state.form.endDate;

        events.push(form);

        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <Paper className="Calendar-container">
                <div>
                    <h3 style={{textAlign: 'center'}}>Календарь событий</h3>
                </div>
                <DragAndDropCalendar
                    selectable={true}
                    onEventDrop={this.handleSelecting}
                    onSelectSlot={this.handleSelectSlot}
                    onSelectEvent={this.handleSelectEvent}
                    events={events}
                    views={['month', 'day']}
                    startAccessor='startDate'
                    endAccessor='endDate' />

                <EventForm
                    open={this.state.open}
                    handleClose={this.handleClose.bind(this, 'open')}
                    handleSaveEvent={this.handleSaveEvent}
                    startDate={this.state.form.startDate}
                    endDate={this.state.form.endDate} />

                <EventDetail
                    open={this.state.openEventDetail}
                    handleClose={this.handleClose.bind(this, 'openEventDetail')}
                    title={this.state.eventDetail.title}
                    description={this.state.eventDetail.description} />
            </Paper>
        );
    }
}

export default DragDropContext(HTML5Backend)(Calendar);
