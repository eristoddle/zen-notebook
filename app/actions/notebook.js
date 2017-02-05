// @flow

// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

// App
// TODO: USE API middleware
// import { LOAD_NOTEBOOK } from '../api/electron';

export const LOAD_NOTEBOOK = 'LOAD_NOTEBOOK';
export const LOAD_NOTEBOOK_SUCCESS = 'LOAD_NOTEBOOK_SUCCESS';
export const LOAD_NOTEBOOK_FAILURE = 'LOAD_NOTEBOOK_FAILURE';

export function loadNotebook() {
    return (dispatch: any) => {
        return dialog.showOpenDialog({
            filters: [
                {
                    name: 'Text',
                    extensions: ['json']
                }
            ],
            properties: ['openFile', 'openDirectory']
        }, (fileNames) => {
            if (fileNames === undefined){
                dispatch(loadNotebookFailure({error: 'No File Chosen'}));
            }
            let fileName = fileNames[0];

            fs.readFile(fileName, (err, data) => {
                if (err){
                    dispatch(loadNotebookFailure({error: err}));
                }
                let notebook = JSON.parse(data);
                dispatch(loadNotebookSuccess(notebook));

            });
        });
    }
}

export function loadNotebookSuccess(notebook : Object) {
    console.log('success', notebook);
    return {type: LOAD_NOTEBOOK_SUCCESS, payload: notebook};
}

export function loadNotebookFailure(data : Object) {
    console.log('failure', data);
    return {type: LOAD_NOTEBOOK_FAILURE, payload: data};
}
