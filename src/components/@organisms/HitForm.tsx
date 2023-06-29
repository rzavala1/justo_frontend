import React, { useState } from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { intl } from '../../i18n';
import { useLoginService } from '@/@service/AuthService';
import { useRouter } from 'next/router';
import HitFormFields from '../@molecules/HitFormFields';

const validationSchema = yup.object({
  name: yup.string().required(intl.formatMessage({ id: 'validation.nameRequired' })),
  email: yup.string().email(intl.formatMessage({ id: 'validation.emailInvalid' })).required(intl.formatMessage({ id: 'validation.emailRequired' })),
  password: yup.string().min(8, intl.formatMessage({ id: 'validation.passwordLength' })).required(intl.formatMessage({ id: 'validation.passwordRequired' })),
});

const HitForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState({state:false, message:''});
  const router = useRouter();
  const hitId  = router.query.id as string;

  const { register } = useLoginService();

  const formik = useFormik({
    initialValues: {
      roleId: 3,
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setShowError(prevState => ({
          ...prevState,
          state: false
        }));
        setShowAlert(false);
        await register(values);
        setShowAlert(true);
      } catch (error : unknown) {
        const errorMessage = (error as Error).message;
        setShowError({
          state:true,
          message:errorMessage
        })
      }
    },
  });

  return (
    <>
      {showAlert && (
        <Alert severity="success" >
          <AlertTitle>Éxito</AlertTitle>
          ¡La operación se completó con éxito!
        </Alert>
      )}
      {showError.state && (
        <Alert severity="error" >
          <AlertTitle>Error</AlertTitle>
          {showError.message}
        </Alert>
      )}
      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        <form onSubmit={formik.handleSubmit} noValidate>
          <HitFormFields formik={formik} hitId={hitId}/>
        </form>
      </Box>
    </>
  );
};

export default HitForm;