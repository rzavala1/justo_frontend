import React, { useState } from 'react';
import { Alert, AlertTitle, Box, FormControl, Typography } from '@mui/material';
import TextField from '../@atoms/TextField';
import Button from '../@atoms/Button';
import { intl } from '../../i18n';

interface RegisterFormFieldsProps {
    formik: any;
}

const RegisterFormFields: React.FC<RegisterFormFieldsProps> = ({ formik }) => {

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4">{intl.formatMessage({ id: 'register.title' })}</Typography>
            </Box>
            <Box>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label={intl.formatMessage({ id: 'register.nameLabel' })}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label={intl.formatMessage({ id: 'register.emailLabel' })}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label={intl.formatMessage({ id: 'register.passwordLabel' })}
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </FormControl>
            </Box>
            <Button variant="contained" color="primary" type="submit">
                {intl.formatMessage({ id: 'register.registerButton' })}
            </Button>
        </>
    );
};

export default RegisterFormFields;