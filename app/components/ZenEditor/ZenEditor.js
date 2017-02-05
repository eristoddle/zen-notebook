// @flow
import React, {Component} from 'react';
import styles from './ZenEditor.css';
import ContentEditable from 'react-contenteditable'
// import {Editor, EditorState} from 'draft-js';

export default class ZenEditor extends Component {

    props : {
        notebook: any
    };

    constructor(props : any) {
        super(props);
        this.state = {
            currentContent: "This is just text"
        };
        // this.state = {
        //     editorState: EditorState.createEmpty()
        // };
        // this.onChange = (editorState) => {
        //     console.log('editorState', editorState.getCurrentContent());
        //     this.setState({editorState})
        // };
        this.onChange = (evt : any) => {
            // this.setState({currentContent: evt.target.value});
            this.state.currentContent = evt.target.value;
            console.log('value', evt.target.value);
            // Loaded notebook here in this.props.notebook.notebook
            console.log('props', this.props);
            console.log('state', this.state);
        };
    }

    // render() {
    //     return (<Editor editorState={this.state.editorState} onChange={this.onChange}/>);
    // }

    render() {
        const { notebook } = this.props;
        return (
            <div>
                <div>
                    <ContentEditable
                        html={this.state.currentContent}
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
