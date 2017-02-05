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
export const UPDATE_ACTIVE_CONTENT = 'UPDATE_ACTIVE_CONTENT';
export const UPDATE_ACTIVE_ENTRY = 'UPDATE_ACTIVE_ENTRY';

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
    return {type: LOAD_NOTEBOOK_SUCCESS, data: notebook};
}

export function loadNotebookFailure(data : Object) {
    return {type: LOAD_NOTEBOOK_FAILURE, data: data};
}

export function updateActiveContent(content: String){
    return {type: UPDATE_ACTIVE_CONTENT, data: content};
}

export function updateActiveEntry(entry: Object){
    return {type: UPDATE_ACTIVE_ENTRY, data: entry};
}
