// @flow
import React, {Component} from 'react';
import styles from './ZenEditor.css';
import ContentEditable from 'react-contenteditable'
// TODO: Try this maybe instead https://github.com/facebook/draft-js
// import {Editor, EditorState} from 'draft-js';

export default class ZenEditor extends Component {

    props : {
        notebook: any
    };

    constructor(props : any) {
        super(props);
        console.log('props loaded in editor', props);

        this.state = {
            activeContent: "This is just text"
        };

        this.onChange = (evt : any) => {
            this.state.activeContent = evt.target.value;
            // TODO: This doesn't seem right but works nonetheless
            this.props.notebook.activeEntry.content = this.state.activeContent;
            // Loaded notebook here in this.props.notebook.notebook
            console.log('props on change', this.props);
            console.log('state on change', this.state);
        };
    }

    render() {
        const { notebook } = this.props;
        return (
            <div>
                <div>
                    <ContentEditable
                        html={this.state.activeContent}
                        disabled={false}
                        onChange={this.onChange}
                        className={styles.editor}
                        autoFocus={true}
                    />
                </div>
            </div>
        );
    }
}
