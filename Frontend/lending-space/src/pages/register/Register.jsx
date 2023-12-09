
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:55155/auth/signup', {
        username,
        password,
      });
      console.log('Cadastro successful:', response.data);
    } catch (error) {
      console.error('Cadastro failed:', error.message);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
