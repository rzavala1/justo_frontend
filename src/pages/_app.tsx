import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Provider as JotaiProvider } from 'jotai';
import client from '../graphql/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <ApolloProvider client={client}>
            <JotaiProvider>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </JotaiProvider>
        </ApolloProvider>
    );
};


export default MyApp
