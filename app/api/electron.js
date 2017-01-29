// TODO add flow

// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

export const LOAD_NOTEBOOK = Symbol('LOAD_NOTEBOOK');

// export default store => next => action => {
//   if ( ! action[CALL_API] ) {
//     return next(action);
//   }
//   let request = action[CALL_API];
//   let { method, path, query, failureType, successType, sendingType } = request;
//   let { dispatch } = store;
//
//   dispatch({ type: sendingType });
//
//   superAgent[method](path)
//     .query(query)
//     .end((err, res)=> {
//       if (err) {
//         dispatch({
//           type: failureType,
//           response: err
//         });
//       } else {
//         dispatch({
//           type: successType,
//           response: res.body
//         });
//       }
//     });
// };

export default store => next => action => {

    if ( ! action[LOAD_NOTEBOOK] ) {
        return next(action);
    }

    let request = action[LOAD_NOTEBOOK];
    let { failureType, successType, sendingType } = request;
    let { dispatch } = store;

    dispatch({ type: sendingType });

    dialog.showOpenDialog({
        filters: [
            {
                name: 'Text',
                extensions: ['json']
            }
        ],
        properties: ['openFile', 'openDirectory']
    }, (fileNames) => {
        if (fileNames === undefined) {
            dispatch({
              type: failureType,
              response: 'Choose a File'
            });
        }

        let fileName = fileNames[0];

        fs.readFile(fileName, (err, data) => {
            if (err) {
                dispatch({
                    type: failureType,
                    response: err
                });
            }

            let notebook = JSON.parse(data);
            console.log('file', notebook);
            dispatch({
                  type: successType,
                  response: notebook
            });
        });
    });
}
