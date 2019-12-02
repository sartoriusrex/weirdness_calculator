import axios from 'axios';

export function apiCall( method, path, data, config ) {
  return new Promise( ( resolve, reject ) => {
    return axios[method]( path, data, config )
      .then( res => {
        return resolve( res.data );
      })
      .catch( err => {
        reject( err.response.data.error );
      });
  })
}

export default apiCall;