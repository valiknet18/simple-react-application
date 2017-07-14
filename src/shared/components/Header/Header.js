import React from 'react';
import logo from '../../../logo.svg';


import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.props.handleDrawer}
                />
            </div>
        );
    }
}

export default Header;
