import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
    render () {
        return (
            <div>
                <AppBar
                    title="Simple react application"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.props.handleDrawer}
                />
            </div>
        );
    }
}

export default Header;
