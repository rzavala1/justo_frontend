import React from 'react';
import { Box, FormControl, Link, Typography } from '@mui/material';
import TextField from '../@atoms/TextField';
import Button from '../@atoms/Button';
import { intl } from '../../i18n';

interface LoginFormFieldsProps {
    formik: any;
}

const LoginFormFields: React.FC<LoginFormFieldsProps> = ({ formik }) => {
    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4">{intl.formatMessage({ id: 'login.title' })}</Typography>
            </Box>
            <Box>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label={intl.formatMessage({ id: 'login.emailLabel' })}
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
                        label={intl.formatMessage({ id: 'login.passwordLabel' })}
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </FormControl>
            </Box>
            <Button variant="contained" color="primary" type="submit">
                {intl.formatMessage({ id: 'login.loginButton' })}
            </Button>
            <Box sx={{ paddingTop: 3 }}>
                <Link href="/register">{intl.formatMessage({ id: 'login.register' })}</Link>
            </Box>
        </>
    );
};

export default LoginFormFields;