import Main from 'components/Main'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  )
}
