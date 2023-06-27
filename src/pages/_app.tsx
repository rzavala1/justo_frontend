import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Provider as JotaiProvider } from 'jotai';
import client from '../apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import '../styles/globals.css';

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

export default MyApp;
