import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  return (
    <div className='App'>
      <form>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleInputChange}
            placeholder='Name'
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleInputChange}
            placeholder='Email'
            required
          />
        </label>
        <label>
          Message:
          <textarea
            type='text'
            name='message'
            value={message}
            onChange={handleInputChange}
            placeholder='Message'
            required
          />
        </label>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
