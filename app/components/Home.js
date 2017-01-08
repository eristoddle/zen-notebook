// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ContentEditable from 'react-contenteditable'


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {text: "This is just text"};
    }

    handleChange(evt) {
        this.setState({text: evt.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <ContentEditable
                        html={this.state.text}
                        disabled={false}
                        onChange={this.handleChange}
                        className={styles.editor}
                        />
                    <Link to="/counter">
                        to Counter
                    </Link>
                </div>
            </div>
        );
  }
}
