import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useHitsService } from '@/@service/HitsService';
import TableOptions from '../@molecules/TableOptions';
import Cookie from "js-cookie";
import Button from '../@atoms/Button';
import { intl } from '@/i18n';
import Link from 'next/link';

const HitsList: React.FC = () => {
    const [hits, setHits] = useState([]);
    const { data } = useHitsService();
    const [showCreate, setShowCreate] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const user = Cookie.get("user");
        if (user) {
            const userJson = JSON.parse(user);
            if (userJson.roleId !== 3) {
                setShowCreate(true);
            }
        }
    }, []);


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
                    {showCreate &&
                        <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "flex-end" }}>
                            <Link href={"/hits/create"}>
                                <Button variant="contained" color="primary">
                                    {intl.formatMessage({ id: 'hit.hitAdd' })}
                                </Button>
                            </Link>
                        </Box>
                    }
                    <TableOptions
                        rows={["Nombre", "Descripción", "Estatus", "Asignado", "Creado por", ""]}
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

export default HitsList;
