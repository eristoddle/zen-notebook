// @flow
import React, {Component} from 'react';
import styles from './Editor.css';
import ContentEditable from 'react-contenteditable'

export default class Editor extends Component {

    props : {
        notebook: any
    };

    state : {
        currentContent: string
    }

    constructor(props : any) {
        super(props);
        this.state = {
            currentContent: "This is just text"
        };
    }

    handleChange(evt : any) {
        console.log('handle change', evt.target.value, this.state, this.props);
        // this.setState({text: evt.target.value});
    }

    render() {
        const { notebook } = this.props;
        return (
            <div>
                <div>
                    <ContentEditable
                        html={this.state.currentContent}
                        disabled={false}
                        onChange={this.handleChange}
                        className={styles.editor}
                        autoFocus={true}
                    />
                </div>
            </div>
        );
    }
}
