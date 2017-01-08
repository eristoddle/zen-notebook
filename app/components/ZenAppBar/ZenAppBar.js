import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

// import 'react-infinite-calendar/styles.css';
// import InfiniteCalendar from 'react-infinite-calendar';

export default class ZenAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        selectedDate: new Date()
    };
  }

  onChange = (dateString, { dateMoment, timestamp }) => {
      console.log(dateString)
  }

  render() {
    return (
        <div>
            <AppBar
                title="Zen Notebook"
                onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                />
            <Drawer
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                docked={false}>

                <DatePicker hintText="Portrait Inline Dialog" container="inline" />

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
