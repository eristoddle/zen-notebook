import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class ZenAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
        <div>
            <AppBar
                title="Zen Notebook"
                onLeftIconButtonTouchTap={this.handleToggle}
                />
            <Drawer open={this.state.open}>
                <MenuItem>
                    Menu Item
                </MenuItem>
                <MenuItem>
                    Menu Item 2
                </MenuItem>
            </Drawer>
        </div>
    );
  }
}
