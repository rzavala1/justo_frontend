import React from 'react';
import LoginForm from '../components/@organisms/LoginForm';

const HomePage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Aquí puedes realizar la lógica de autenticación utilizando los datos del formulario
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
