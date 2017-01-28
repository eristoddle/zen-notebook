// @flow
import React, {Component} from 'react';

// UI
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

// App
import styles from './Settings.css';

export default class Settings extends Component {

  constructor(props : any) {
    super(props);
  }

  chooseNotebookFile() {
    dialog.showOpenDialog({
      filters: [
        {
          name: 'Text',
          extensions: ['json']
        }
      ],
      properties: ['openFile', 'openDirectory']
    }, (fileNames) => {
      if (fileNames === undefined)
        return;
      let fileName = fileNames[0];

      fs.readFile(fileName, (err, data) => {
          let notebook = JSON.parse(data);
          console.log('file', notebook);
      });
    })
  }

  render() {
    return (
      <div className={styles.root}>
        <Paper zDepth={4}>
          <List>
            <Subheader>General</Subheader>
            <ListItem primaryText="Notebook file" secondaryText="Change your notebook" onClick={this.chooseNotebookFile}/>
            <ListItem primaryText="Show your status" secondaryText="Your status is visible to everyone you use with"/>
          </List>
          <Divider/>
          <List>
            <Subheader>Hangout Notifications</Subheader>
            <ListItem leftCheckbox={< Checkbox />} primaryText="Notifications" secondaryText="Allow notifications"/>
            <ListItem leftCheckbox={< Checkbox />} primaryText="Sounds" secondaryText="Hangouts message"/>
            <ListItem leftCheckbox={< Checkbox />} primaryText="Video sounds" secondaryText="Hangouts video call"/>
          </List>
        </Paper>
      </div>
    );
  }
}
