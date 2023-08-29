// import { useState } from "react";
import JSONPretty from "react-json-prettify";

function Results (props) {
  // const [method, setMethodd] = useState("GET");
  // const [url, setUrll] = useState("");

  // const handleSubmit = (e) => {
  //   console.log(e);
  //   const formData = {
  //     method: method,
  //     url: url,
  //   };
  //   props.handleApiCall(formData);
  //   setMethodd("GET");
  // };

    return (
      <section>
        {props.loading ? (
        <div>Loading...</div>
      ) : (
        <pre>
          {props.data.headers !== null && (
            <div>
              <h3>Headers:</h3>
              <JSONPretty json={props.data.headers} />
            </div>
          )}
          {props.data.results !== null && (
            <div>
              <h3>Results:</h3>
              <JSONPretty
                json={props.data.results}

              />

              {props.data.results.previous !== null && (
                <button
                  onClick={() => {
                    props.updateUrl(props.data.results.previous);
                  }}
                >
                  Previous
                </button>
              )}
              {props.data.results.next !== null && (
                <button
                  onClick={() => {
                    props.updateUrl(props.data.results.next);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </pre>
      )}
    </section>
    );
  }

export default Results;
