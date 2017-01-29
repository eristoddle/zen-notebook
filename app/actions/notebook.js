// @flow

// TODO: Should this be here?
// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

// App
import { LOAD_NOTEBOOK } from '../api/electron';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const LOADING_NOTEBOOK = 'LOADING_NOTEBOOK';
export const LOAD_NOTEBOOK_SUCCESS = 'LOAD_NOTEBOOK_SUCCESS';
export const LOAD_NOTEBOOK_FAILED = 'LOAD_NOTEBOOK_FAILED';

export function increment() {
    return {type: INCREMENT_COUNTER};
}

export function decrement() {
    return {type: DECREMENT_COUNTER};
}

export function loadnotebook() {
    return {type: LOAD_NOTEBOOK};
}

export function incrementIfOdd() {
    return (dispatch : Function, getState : Function) => {
        const {counter} = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay : number = 1000) {
    return (dispatch : Function) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}

export function chooseNotebookFile() {
    return (dispatch : Function) => {
        dispatch({
            [LOAD_NOTEBOOK]: {
                // method: 'get',
                // path: '/questions',
                sendingType: LOADING_NOTEBOOK,
                successType: LOAD_NOTEBOOK_SUCCESS,
                failureType: LOAD_NOTEBOOK_FAILED
                // actionType: LOAD_NOTEBOOK
            }
        });
        // dispatch(loadnotebook());
    }
}

// export function chooseNotebookFile() {
//     return dialog.showOpenDialog({
//       filters: [
//         {
//           name: 'Text',
//           extensions: ['json']
//         }
//       ],
//       properties: ['openFile', 'openDirectory']
//     }, (fileNames) => {
//       if (fileNames === undefined)
//         return;
//       let fileName = fileNames[0];
//
//       fs.readFile(fileName, (err, data) => {
//           let notebook = JSON.parse(data);
//           console.log('file', notebook);
//       });
//     })
// }
