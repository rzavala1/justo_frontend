import React from 'react';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { intl } from '../../i18n';
import LoginFormFields from '../@molecules/LoginFormFields';
import { useLoginService } from '@/@service/AuthService';
import { useRouter } from 'next/router';

const validationSchema = yup.object({
  email: yup.string().email(intl.formatMessage({ id: 'validation.emailInvalid' })).required(intl.formatMessage({ id: 'validation.emailRequired' })),
  password: yup.string().min(8, intl.formatMessage({ id: 'validation.passwordLength' })).required(intl.formatMessage({ id: 'validation.passwordRequired' })),
});

const LoginForm: React.FC = () => {

  const router = useRouter();
  const { login, loading, error } = useLoginService();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
      router.push('/hits');
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <LoginFormFields formik={formik} />
      </form>
    </Box>
  );
};

export default LoginForm;