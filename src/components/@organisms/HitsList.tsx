import React, { useEffect, useState } from 'react';
import { Box, Paper, Table, TableContainer, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useHitsService } from '@/@service/HitsService';
import TableOptions from '../@molecules/TableOptions';

interface Hit {
    target: string;
    status: string;
    assigned: string;
}

const HitsList: React.FC = () => {
    const [hits, setHits] = useState([]);
    const { data } = useHitsService();
    const router = useRouter();

    useEffect(() => {
        setHits(data?.hits);
    }, [data]);

    return (
        <>
            <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
                <Typography variant="h4" align="center">
                    Hits
                </Typography>
                <Box sx={{ maxWidth: '1280px', marginTop: 3 }}>
                    <TableOptions
                        rows={["Nombre","Descripción", "Estatus", "Asignado", ""]}
                        data={
                            data?.hits?.map((v: any, index: number) => ({
                                title: v?.id,
                                columns: [
                                    <p key={index}>{v?.name}</p>,
                                    <p key={index}>{v?.description}</p>,
                                    <p key={index}>{v?.status}</p>,
                                    <p key={index}>{v?.User?.name}</p>,
                                    <div className="flex" key={index}>
                                        <button
                                            onClick={() => {
                                                router.push(`/locations/edit/${v?.id}`);
                                            }}
                                        >
                                            Editar
                                        </button>
                                    </div>,
                                ],
                            })) || []
                        }
                    />
                </Box>


            </Box>
        </>
    );
};

export default HitsList;
