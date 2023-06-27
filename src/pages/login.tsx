import LayoutPublic from '@/components/@templates/LayoutPublic';
import React from 'react';
import LoginForm from '../components/@organisms/LoginForm';

const LoginPage: React.FC = () => {

  return (
    <LayoutPublic>
      <LoginForm/>
    </LayoutPublic>
  );
};

export default LoginPage;
