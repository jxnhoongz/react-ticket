import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm';

const LoginPage: React.FC = () => {
  let navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    // Here you would typically send a request to your API to log in the user.
    // For the purpose of this example, we'll just log the username and password to the console
    // and redirect the user to the Dashboard.
    console.log(`Logging in with username: ${username} and password: ${password}`);

    // TODO: Implement your API call here

    // If login is successful, you can navigate the user to the Dashboard.
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
