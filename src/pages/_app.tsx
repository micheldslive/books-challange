import { AppProps } from 'next/app'
import Head from 'next/head'
import { theme , GlobalStyles } from '@/styles'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/core/mocks'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
  const { route } = useRouter()

  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta name='description' content='Ioasys Books - Front-End Challenge' />
      </Head>

      <DefaultSeo {...SEO} />
      <GlobalStyles />

      <AnimatePresence mode='wait'>
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <NextNProgress color={theme.colors.pink} />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
