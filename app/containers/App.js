// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ZenAppBar from '../components/ZenAppBar/ZenAppBar.js';

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
