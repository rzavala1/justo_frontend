import React, { useState } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import TextField from '../@atoms/TextField';
import { intl } from '../../i18n';
import SelectOptions from '../@atoms/SelectOptions';
import { HitData } from '@/types/HitsTypes';

interface Props {
    formik: any;
}

const HitCreateFormFields: React.FC<Props> = ({ formik }) => {

    const [hit, setHit] = useState<HitData>({});

    const statusOptions = [
        { value: 'assigned', label: 'Asignado' },
        { value: 'failed', label: 'Error' },
        { value: 'completed', label: 'Completo' },
    ];

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4">{intl.formatMessage({ id: 'hitmen.title' })}</Typography>
            </Box>
            <Box>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label={intl.formatMessage({ id: 'hitmen.nameLabel' })}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label={intl.formatMessage({ id: 'hitmen.descriptionLabel' })}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <SelectOptions name="status" label="Estado" options={statusOptions} initialValue={hit?.status || ''} />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="create"
                        name="create"
                        label={intl.formatMessage({ id: 'hitmen.createLabel' })}
                        type="create"
                        value={formik.values.create}
                        onChange={formik.handleChange}
                        error={formik.touched.create && Boolean(formik.errors.create)}
                        helperText={formik.touched.create && formik.errors.create}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        id="assign"
                        name="assign"
                        label={intl.formatMessage({ id: 'hitmen.assignLabel' })}
                        type="assign"
                        value={formik.values.assign}
                        onChange={formik.handleChange}
                        error={formik.touched.assign && Boolean(formik.errors.assign)}
                        helperText={formik.touched.assign && formik.errors.assign}
                    />
                </FormControl>
            </Box>
        </>
    );
};

export default HitCreateFormFields;
