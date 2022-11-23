import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            required
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
