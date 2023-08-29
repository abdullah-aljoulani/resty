import React, { useState , useEffect } from 'react';

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

function App() {

  const[data, setData] = useState({ headers: null, results: null })
 const[requestParams, setRequestParams] = useState({})
 const [loading, setLoading] = useState(false);
 
 
 
  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  setLoading(true);

  };

  useEffect(() => {
    if (requestParams.url) {
      setLoading(true);
      axios
            .get(requestParams.url)
            .then((response) => {
              console.log("data", response);
              setData({ headers: response.headers, results: response.data });
            })
            .catch((error) => {
              console.error("Error:", error);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }, [requestParams]);

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results
        data={data}
        loading={loading}
        handleApiCall={callApi}
        updateUrl={(newUrl) =>
          callApi({ method: requestParams.method, url: newUrl })
        }
      />
        <Footer />
      </React.Fragment>
    );
  }

export default App;
