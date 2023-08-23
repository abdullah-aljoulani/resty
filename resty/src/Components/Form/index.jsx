import './Form.scss';
import { useState } from 'react';

function Form (props) {

  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };


  const handleSubmit = e => {
    console.log(e)
    e.preventDefault();
    const formData = {
      method:method,
      url: url,
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            />
            <button type="submit">GO!</button>
          </label>
          </form>
          <label className="methods">
          <button  onClick={() => handleMethodChange('GET')}> GET </button>
            <button  onClick={() => handleMethodChange('POST')}> POST </button>
            <button  onClick={() => handleMethodChange('PUT')}> PUT </button>
            <button  onClick={() => handleMethodChange('DELETE')}> DELETE </button>
          </label>
        
          <label>Post and update
          <textarea id="myTextarea" name="comments" rows="4" cols="100" placeholder = 'Json format' > </textarea>
        </label>
      </>
    );
  }

export default Form;
