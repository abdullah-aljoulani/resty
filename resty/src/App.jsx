import React, { useReducer , useEffect } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

import { initState, actionType, reducer } from "./reducers/actions";

function App() {

  const [state, dispatch] = useReducer(reducer, initState);

//   const[data, setData] = useState({ headers: null, results: null })
//  const[requestParams, setRequestParams] = useState({})
//  const [loading, setLoading] = useState(false);
 
 
 
  const callApi = (requestParams) => {
    dispatch({ type: actionType.REQUEST_PARAMS, payload: requestParams });
    dispatch({ type: actionType.LOADING, payload: true });

    

  };

  useEffect(() => {
    if (state.requestParams.url) {
    dispatch({ type: actionType.LOADING, payload: true });
      axios
            .get(state.requestParams.url)
            .then((response) => {
              console.log("data", response);
              dispatch({
                type: actionType.DATA,
                payload: { headers: response.headers, results: response.data },
              });
            })
            .catch((error) => {
              console.error("Error:", error);
            })
            .finally(() => {
              dispatch({ type: actionType.LOADING, payload: false });
            });
        }
      }, [state.requestParams]);

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form handleApiCall={callApi} dispatch={dispatch} />
        <Results
        data={state.data}
        loading={state.loading}
        handleApiCall={callApi}
        updateUrl={(newUrl) =>
          callApi({ method: state.requestParams.method, url: newUrl })
        }
      />
        <Footer />
      </React.Fragment>
    );
  }

export default App;
