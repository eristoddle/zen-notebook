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
export const CHANGE_ACTIVE_ENTRY = 'CHANGE_ACTIVE_ENTRY';
export const CHANGE_ACTIVE_NOTEBOOK = 'CHANGE_ACTIVE_NOTEBOOK';

export function increment() {
    return {type: INCREMENT_COUNTER};
}

export function decrement() {
    return {type: DECREMENT_COUNTER};
}

export function changeentry() {
    return {type: CHANGE_ACTIVE_ENTRY};
}

export function changenotebook() {
    return {type: CHANGE_ACTIVE_NOTEBOOK};
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

// export function chooseNotebookFile() {
//     return store.dispatch({
//         [LOAD_NOTEBOOK]: {
//             method: 'get',
//             path: '/questions',
//             sendingType: SENDING_QUESTIONS,
//             successType: LOAD_QUESTION_SUCCESS,
//             failureType: LOAD_QUESTION_FAILED
//         }
//     });
// }

export function chooseNotebookFile() {
    return dialog.showOpenDialog({
      filters: [
        {
          name: 'Text',
          extensions: ['json']
        }
      ],
      properties: ['openFile', 'openDirectory']
    }, (fileNames) => {
      if (fileNames === undefined)
        return;
      let fileName = fileNames[0];

      fs.readFile(fileName, (err, data) => {
          let notebook = JSON.parse(data);
          console.log('file', notebook);
      });
    })
}
