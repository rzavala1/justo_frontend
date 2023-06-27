import React from 'react';
import { Box, FormControl } from '@mui/material';
import TextField from '../@atoms/TextField';
import Button from '../@atoms/Button';
import { intl } from '../../i18n';

interface LoginFormFieldsProps {
    formik: any;
}

const LoginFormFields: React.FC<LoginFormFieldsProps> = ({ formik }) => {
    return (
        <>
            <Box>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
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
                        label="Password"
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
        </>
    );
};

export default LoginFormFields;