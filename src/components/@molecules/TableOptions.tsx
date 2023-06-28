import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type PropDataTable = {
    title: string;
    columns?: React.ReactNode[];
};
type PropTable = {
    rows: string[];
    data?: PropDataTable[];
    pagination?: {
        limit?: number;
        page?: number;
        next?: boolean;
        prev?: boolean;
        count?: string;
    };
};

const TableOptions = (props: PropTable) => {
    const { rows, data = null } = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, backgroundColor:"#FDFDFD"}} >
                <TableHead sx={{backgroundColor:"#000000"}}>
                    <TableRow>
                        {rows?.map((v, k) => (
                            <TableCell key={k}>{v}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody >
                    {data?.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            {row?.columns?.map((v, key) => (
                                <TableCell
                                    key={key}
                                    component="th"
                                    sx={{color:"#000000"}}
                                    scope="row"
                                >
                                    {v}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableOptions;
