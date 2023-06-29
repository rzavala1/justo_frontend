import React, { useState } from 'react';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { intl } from '../../i18n';
import { useHitsService } from '@/@service/HitsService';
import { useRouter } from 'next/router';
import HitFormFields from '../@molecules/HitFormFields';
import HitCreateFormFields from '../@molecules/HitCreateFormFields';

const validationSchema = yup.object({
  name: yup.string().required(intl.formatMessage({ id: 'validation.required' })),
  description: yup.string().required(intl.formatMessage({ id: 'validation.required' })),
  status: yup.string().required(intl.formatMessage({ id: 'validation.required' })),
  assignId: yup.string().required(intl.formatMessage({ id: 'validation.required' })),
  createId: yup.string().required(intl.formatMessage({ id: 'validation.required' })),
});

const HitCreateForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState({ state: false, message: '' });
  const router = useRouter();
  const hitId = router.query.id as string;

  const { create } = useHitsService();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      status: '',
      assignId:0,
      createId:0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setShowError(prevState => ({
          ...prevState,
          state: false
        }));
        setShowAlert(false);
        const response={
          name:values?.name,
          description:values?.description,
          status:values?.status,
          createId:values?.createId,
          assignId:values?.assignId
        }
        await create(response);
        setShowAlert(true);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        setShowError({
          state: true,
          message: errorMessage
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
          <HitCreateFormFields formik={formik} />
          <Button variant="contained" color="primary" type="submit">
            {intl.formatMessage({ id: 'hit.hitButton' })}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default HitCreateForm;