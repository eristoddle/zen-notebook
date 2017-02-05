// @flow
import React, {Component} from 'react';
import styles from './Home.css';
import ContentEditable from 'react-contenteditable'

export default class Home extends Component {

    props : {
        notebook: any
    };

    state : {
        text: string
    }

    constructor(props : any) {
        super(props);
        this.state = {
            text: "This is just text"
        };
    }

    handleChange(evt : any) {
        console.log('handle change', evt.target.value);
        // this.setState({text: evt.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <ContentEditable html={this.state.text} disabled={false} onChange={this.handleChange} className={styles.editor}/>
                </div>
            </div>
        );
    }
}
