import React, { useState } from 'react';
import { useLoginMutation } from '../model/useLoginMutation';
import './LoginForm.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading, error } = useLoginMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
