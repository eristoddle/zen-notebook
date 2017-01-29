// @flow
import React, {Component} from 'react';

// UI
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

// App
import styles from './Settings.css';

export default class Settings extends Component {

    props:{
        increment: () => void,
        incrementIfOdd: () => void,
        incrementAsync: () => void,
        decrement: () => void,
        counter: number,
        notebook: any,
        chooseNotebookFile: () => void
    };

    constructor(props : any) {
        super(props);
    }

    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter, notebook, chooseNotebookFile } = this.props;

        return (
            <div className={styles.root}>
                <Paper zDepth={4}>
                    <List>
                        <Subheader>General</Subheader>
                        <ListItem
                            primaryText="Notebook file"
                            secondaryText="Change your notebook"
                            onClick={chooseNotebookFile}/>
                        <ListItem
                            primaryText="Show your status"
                            secondaryText="Your status is visible to everyone you use with"/>
                    </List>
                    <Divider/>
                    <List>
                        <Subheader>
                            Hangout Notifications
                        </Subheader>
                        <ListItem
                            leftCheckbox={
                                < Checkbox />
                        }
                        primaryText="Notifications"
                        secondaryText="Allow notifications"/>
                        <ListItem
                            leftCheckbox={
                                < Checkbox />
                        }
                        primaryText="Sounds"
                        secondaryText="Hangouts message"/>
                        <ListItem
                            leftCheckbox={
                                < Checkbox />
                        }
                        primaryText="Video sounds"
                        secondaryText="Hangouts video call"/>
                    </List>
                </Paper>
            </div>
        );
    }
}
