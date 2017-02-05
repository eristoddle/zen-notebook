// TODO  add flow
import React from 'react';
import {Link} from 'react-router';

//UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


// TODO: Put menu items in redux

// import 'react-infinite-calendar/styles.css';
// import InfiniteCalendar from 'react-infinite-calendar';

export default class ZenAppBar extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      selectedDate: new Date()
    };
  }

  onChange = (dateString, {dateMoment, timestamp}) => {
    console.log(dateString)
  }

  render() {
    return (
      <div>
        <AppBar title="Zen Notebook" onLeftIconButtonTouchTap={() => this.setState({
          open: !this.state.open
        })}/>
        <Drawer open={this.state.open} onRequestChange={(open) => this.setState({open})} docked={false}>

          <DatePicker hintText="Portrait Inline Dialog" container="inline" defaultDate={this.state.selectedDate}/>

          <MenuItem onTouchTap={() => this.setState({
            open: !this.state.open
          })}>
            <Link to="/">
              Editor
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={() => this.setState({
            open: !this.state.open
          })}>
            <Link to="/settings">
              Settings
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={() => this.setState({
            open: !this.state.open
          })}>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
