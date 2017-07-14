import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
    marginTop: 10,
    marginLeft: 10,
    color: '#fff',
    cursor: 'pointer'
};

const menuStyles = {};

class LeftMenu extends Component {
    render () {
        const closeIcon = <FontIcon style={iconStyles} className="material-icons">close</FontIcon>;

        return (
            <div>
                <Drawer width={250} style={menuStyles} zDepth={3} open={this.props.open}>
                    <AppBar
                        iconElementLeft={closeIcon}
                        onLeftIconButtonTouchTap={this.props.handleDrawer}
                    />
                    <List>
                        <Link to="/">
                            <ListItem primaryText="Главная" />
                        </Link>
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
