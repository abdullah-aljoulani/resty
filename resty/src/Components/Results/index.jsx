import JSONPretty from "react-json-prettify";

function Results (props) {

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
              <JSONPretty json={props.data.results} />
            </div>
          )}
        </pre>
      )}
    </section>
    );
  }

export default Results;
