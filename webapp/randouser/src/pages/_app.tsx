import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>RandoUsers</title>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
