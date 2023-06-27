import RegisterForm from '@/components/@organisms/RegisterForm';
import LayoutPublic from '@/components/@templates/LayoutPublic';
import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <LayoutPublic>
      <RegisterForm/>
    </LayoutPublic>
  );
};

export default RegisterPage;
