// @flow
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ZenAppBar from '../components/ZenAppBar/ZenAppBar.js';

injectTapEventPlugin();

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
        <MuiThemeProvider>
            <div>
                <ZenAppBar />
                {this.props.children}
            </div>
        </MuiThemeProvider>
    );
  }
}
