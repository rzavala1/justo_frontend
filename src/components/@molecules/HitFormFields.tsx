import React, { useEffect, useState } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import TextField from '../@atoms/TextField';
import { intl } from '../../i18n';
import SelectOptions from '../@atoms/SelectOptions';
import { HIT_BY_ID_QUERY } from '@/apollo/queries/HitsQuery';
import { useQuery } from '@apollo/client';
import { HitData } from '@/types/HitsTypes';

interface Props {
    formik: any;
    hitId: string;
}

const HitFormFields: React.FC<Props> = ({ formik, hitId }) => {

    const [hit, setHit] = useState<HitData>({});
 
    const { data: dataHit } = useQuery(HIT_BY_ID_QUERY, {
        variables: {
            hitId: Number(hitId)
        }
    });

    useEffect(() => {
        if (dataHit) {
            setHit(dataHit?.hit);
            formik.setFieldValue('name', dataHit?.hit.name);
            formik.setFieldValue('description', dataHit?.hit.description);
            formik.setFieldValue('description', dataHit?.hit.description);
            formik.setFieldValue('status', dataHit?.hit?.status);
            formik.setFieldValue('create', dataHit?.hit.createUser?.name);
            formik.setFieldValue('assign', dataHit?.hit?.assignUser?.name);
        }
    }, [dataHit]);

    const statusOptions = [
        { value: 'assigned', label: 'Asignado' },
        { value: 'failed', label: 'Error' },
        { value: 'completed', label: 'Completo' },
    ];

    const handleSelectChange = (value: string) => {
        if(value="open"){
            formik.setFieldValue('status', null);
        }else{
            formik.setFieldValue('status', value);
        }
    };

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4">{intl.formatMessage({ id: 'hit.title' })}</Typography>
            </Box>
            {dataHit &&
                <Box>
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label={intl.formatMessage({ id: 'hit.nameLabel' })}
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
                            label={intl.formatMessage({ id: 'hit.descriptionLabel' })}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <SelectOptions onChangeValue={handleSelectChange} name="status" label="Estado" options={statusOptions} initialValue={hit?.status || ''}/>
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            id="create"
                            name="create"
                            label={intl.formatMessage({ id: 'hit.createLabel' })}
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
                            label={intl.formatMessage({ id: 'hit.assignLabel' })}
                            type="assign"
                            value={formik.values.assign}
                            onChange={formik.handleChange}
                            error={formik.touched.assign && Boolean(formik.errors.assign)}
                            helperText={formik.touched.assign && formik.errors.assign}
                        />
                    </FormControl>
                </Box>
            }
        </>
    );
};

export default HitFormFields;
