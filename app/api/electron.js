// TODO add flow

// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

export default store => next => action => {

    let {dispatch} = store;

    // next(action);
    switch (action.type) {
        case 'LOAD_NOTEBOOK':
            return (dispatch : any) => {
                return dialog.showOpenDialog({
                    filters: [
                        {
                            name: 'Text',
                            extensions: ['json']
                        }
                    ],
                    properties: ['openFile', 'openDirectory']
                }, (fileNames) => {
                    if (fileNames === undefined) {
                        dispatch(loadNotebookFailure({error: 'No File Chosen'}));
                    }
                    let fileName = fileNames[0];

                    fs.readFile(fileName, (err, data) => {
                        if (err) {
                            dispatch(loadNotebookFailure({error: err}));
                        }
                        let notebook = JSON.parse(data);
                        dispatch(loadNotebookSuccess(notebook));

                    });
                });
            }
            break;

        default:
            break;
    }
}
