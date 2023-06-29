import React, { useEffect, useState } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import TextField from '../@atoms/TextField';
import { intl } from '../../i18n';
import SelectOptions from '../@atoms/SelectOptions';
import { HitData } from '@/types/HitsTypes';
import Cookie from "js-cookie";
import { useUsersService } from '@/@service/UsersService';
import { userData } from '@/types/UserTypes';

interface Props {
    formik: any;
}

interface Option {
    value: string | undefined;
    label: string;
  }

const HitCreateFormFields: React.FC<Props> = ({ formik }) => {

    const [hit, setHit] = useState<HitData>({});
    const { data } = useUsersService();
    const [assignOptions, setAssignOptions]=useState<Option[]>([]);

    const statusOptions:Option[] = [
        { value: 'open', label: 'Abierto' },
        { value: 'assigned', label: 'Asignado' },
        { value: 'failed', label: 'Error' },
        { value: 'completed', label: 'Completo' },
    ]

    useEffect(() => {
        //assignOptions
        if (data) {
            console.info(data.users)
            const arr:Option[]= [];
            data.users.map((user:userData) => {
                arr.push({
                    value: user.id?.toString(),
                    label: user.name
                })
            });
            setAssignOptions(arr)
            console.info(arr)
        }
    }, [data]);

    const handleSelectChange = (value: string) => {
        formik.setFieldValue('status', value);
    };

    const handleSelectAssign = (value: string) => {
        formik.setFieldValue('assignId', value);
    };

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
                    <SelectOptions onChangeValue={handleSelectChange} name="status" label="Estado"
                        options={statusOptions} initialValue={hit?.status || ''} />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <SelectOptions onChangeValue={handleSelectAssign} name="assignId" label="Asignar a"
                        options={assignOptions} initialValue={"" + hit?.assignId || ''} />
                </FormControl>
            </Box>
        </>
    );
};

export default HitCreateFormFields;
