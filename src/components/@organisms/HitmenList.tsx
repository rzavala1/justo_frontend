import React, { useEffect, useState } from 'react';
import { Box, Paper, Table, TableContainer, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useHitsService } from '@/@service/HitsService';
import TableOptions from '../@molecules/TableOptions';


const HitmenList: React.FC = () => {
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
                    Hitmen
                </Typography>
                <Box sx={{ maxWidth: '1280px', marginTop: 3 }}>
                    <TableOptions
                        rows={["Nombre","Correo electrónico", "Descripción", "Estatus", "", ""]}
                        data={
                            data?.hits?.map((v: any, index: number) => ({
                                title: v?.id,
                                columns: [
                                    <p key={index}>{v?.name}</p>,
                                    <p key={index}>{v?.description}</p>,
                                    <p key={index}>{v?.status}</p>,
                                    <p key={index}>{v?.assignUser?.name}</p>,
                                    <p key={index}>{v?.createUser?.name}</p>,
                                    <div className="flex" key={index}>
                                        <button
                                            onClick={() => {
                                                router.push(`/hits/${v?.id}`);
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

export default HitmenList;
