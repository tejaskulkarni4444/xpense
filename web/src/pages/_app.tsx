import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import handler from './api/hello'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   fetch('http://localhost:5000/api').then((res) => {
  //     console.log(res)
  //   })
  // }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
