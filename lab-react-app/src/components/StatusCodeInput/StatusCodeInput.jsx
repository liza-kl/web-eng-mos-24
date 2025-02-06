import { useState } from 'react';

const StatusCodeInput = ({ onFetchImage }) => {
  const [statusCode, setStatusCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (statusCode) {
      onFetchImage(`https://http.dog/${statusCode}.jpg`);
      setStatusCode(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={statusCode}
        onChange={(e) => setStatusCode(e.target.value)}
        placeholder="Enter HTTP Status Code"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Fetch Image
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StatusCodeInput;
