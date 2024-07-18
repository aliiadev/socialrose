import './index.css';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { openSans, theme } from '@/theme';
import { NextPageWithLayout } from '@/types/page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Social Rose</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div className={openSans.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </MantineProvider>
  );
}
