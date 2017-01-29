// TODO add flow

// Electron
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');

export const LOAD_NOTEBOOK = 'LOAD_NOTEBOOK';
export const LOADING_NOTEBOOK = 'LOADING_NOTEBOOK';
export const LOAD_NOTEBOOK_SUCCESS = 'LOAD_NOTEBOOK_SUCCESS';
export const LOAD_NOTEBOOK_FAILED = 'LOAD_NOTEBOOK_FAILED';

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

    let { dispatch } = store;

    // next(action);
    switch (action.type) {
        case 'LOAD_NOTEBOOK':
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
                    return dispatch({
                      type: LOAD_NOTEBOOK_FAILED,
                      data: 'Choose a File'
                    });
                }

                let fileName = fileNames[0];

                fs.readFile(fileName, (err, data) => {
                    if (err) {
                        return dispatch({
                            type: LOAD_NOTEBOOK_FAILED,
                            data: err
                        });
                    }

                    let notebook = JSON.parse(data);
                    console.log('file', notebook);
                    return dispatch({
                          type: LOAD_NOTEBOOK_SUCCESS,
                          data: notebook
                    });
                });
            });
            // request.get('/data/todo-data.json').end((err, res) => {
            //     if (err) {
            //         return next({type: 'GET_TODO_DATA_ERROR', err})
            //     }
            //     const data = JSON.parse(res.text)
            //     next({type: 'GET_TODO_DATA_RECEIVED', data})
            // });
            break;

        default:
            break;
    }

    // if ( ! action[LOAD_NOTEBOOK] ) {
    //     return next(action);
    // }
    //
    // let request = action[LOAD_NOTEBOOK];
    // let { failureType, successType, sendingType } = request;
    // let { dispatch } = store;
    //
    // dispatch({ type: sendingType });
    //
    // dialog.showOpenDialog({
    //     filters: [
    //         {
    //             name: 'Text',
    //             extensions: ['json']
    //         }
    //     ],
    //     properties: ['openFile', 'openDirectory']
    // }, (fileNames) => {
    //     if (fileNames === undefined) {
    //         dispatch({
    //           type: failureType,
    //           data: 'Choose a File'
    //         });
    //     }
    //
    //     let fileName = fileNames[0];
    //
    //     fs.readFile(fileName, (err, data) => {
    //         if (err) {
    //             dispatch({
    //                 type: failureType,
    //                 data: err
    //             });
    //         }
    //
    //         let notebook = JSON.parse(data);
    //         console.log('file', notebook);
    //         dispatch({
    //               type: successType,
    //               data: notebook
    //         });
    //     });
    // });
}
