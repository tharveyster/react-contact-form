import React, { useState } from 'react';
import './App.css';
import validateEmail from './utils/helpers';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const validation = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'name') {
      if (!inputValue.length) {
        setErrorMessage('The name field is required');
      }
    } else if (inputType === 'email') {
      if (!validateEmail(inputValue)) {
        setErrorMessage('Email is invalid');
      } else {
        setErrorMessage('');
      }
      if (!inputValue.length) {
        setErrorMessage('The email field is required');
      }
    } else {
      if (!inputValue.length) {
        setErrorMessage('The message field is required');
      }
    }
  };

  return (
    <div className='App'>
      <form>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onBlur={validation}
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
            onBlur={validation}
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
            onBlur={validation}
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
