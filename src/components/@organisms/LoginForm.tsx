import React from 'react';
import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { intl } from '../../i18n';
import LoginFormFields from '../@molecules/LoginFormFields';
import { LOGIN_USER } from "../../apollo/mutations/AuthMutation";
import { useMutation } from '@apollo/client';

const validationSchema = yup.object({
  email: yup.string().email(intl.formatMessage({ id: 'validation.emailInvalid' })).required(intl.formatMessage({ id: 'validation.emailRequired' })),
  password: yup.string().min(8, intl.formatMessage({ id: 'validation.passwordLength' })).required(intl.formatMessage({ id: 'validation.passwordRequired' })),
});

const LoginForm: React.FC = () => {

  const [loginMutation, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await loginMutation({
          variables: { email: values.email, password: values.password },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto'}}>
      <form onSubmit={formik.handleSubmit}>
        <LoginFormFields formik={formik} />
      </form>
    </Box>
  );
};

export default LoginForm;