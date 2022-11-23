import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='App'>
      <form>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
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
