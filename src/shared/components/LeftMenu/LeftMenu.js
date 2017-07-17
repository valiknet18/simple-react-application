import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {userLogout} from '../../../auth/actions/users';

import './LeftMenu.css';

const iconStyles = {
    marginTop: 10,
    marginLeft: 10,
    color: '#fff',
    cursor: 'pointer'
};

class LeftMenu extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        const { dispatch } = this.props;

        dispatch(userLogout());
    }

    render () {
        const closeIcon = <FontIcon style={iconStyles} className="material-icons">close</FontIcon>;
        const unlogged = (
            <div>
                <Link to="/login">
                    <ListItem primaryText="Логин"  />
                </Link>
                <Link to="/registration">
                    <ListItem primaryText="Регистрация" />
                </Link>
            </div>
        );
        const calendar = (
            <Link to="/calendar">
                <ListItem primaryText="Календарь" />
            </Link>
        );

        const profile = this.props.profile ? (
            <div className="profile">
                <h4 className="profile-name">{this.props.profile.last_name} {this.props.profile.first_name}</h4>
                <FontIcon className="material-icons profile-logout" onClick={this.logout}>home</FontIcon>
            </div>
        ) : null;

        return (
            <div>
                <Drawer width={250} zDepth={3} open={this.props.open}>
                    <AppBar
                        iconElementLeft={closeIcon}
                        onLeftIconButtonTouchTap={this.props.handleDrawer}
                    />
                    {profile}
                    <List>
                        <Link to="/">
                            <ListItem primaryText="Главная" />
                        </Link>
                        {this.props.profile ? calendar : unlogged}
                        <Link to="/contact">
                            <ListItem primaryText="Контактная форма" />
                        </Link>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default LeftMenu;
