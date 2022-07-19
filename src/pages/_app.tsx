import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <meta name="description" content="A simple project" />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
