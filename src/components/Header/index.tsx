import {
  Box,
  HStack
} from '@chakra-ui/react'
import Link from 'next/link'

type HeaderProps = {
  hideListLink?: boolean;
  hideDeleteLink?: boolean;
  hideRegisterLink?: boolean;
  hideUpdateLink?: boolean;
}

export function Header({
  hideListLink,
  hideDeleteLink,
  hideRegisterLink,
  hideUpdateLink
}: HeaderProps) {
  return (
    <HStack color="#06092b" flexDirection="row" justifyContent="center" alignItems="center">
      {!hideUpdateLink && (
        <Box padding={1} background="#8999bd" borderRadius={2}>
          <Link href="/updateProduct" passHref>
            <a href="">Atualizar Produtos</a>
          </Link>
        </Box>
      )}
      {!hideDeleteLink && (
        <Box padding={1} background="#8999bd" borderRadius={2}>
          <Link href="/deleteProduct" passHref>
            <a href="">Deletar Produtos</a>
          </Link>
        </Box>
      )}
      {!hideRegisterLink && (
        <Box padding={1} background="#8999bd" borderRadius={2}>
          <Link href="/" passHref>
            <a href="">Registrar Produto</a>
          </Link>
        </Box>
      )}
      {!hideListLink && (
        <Box padding={1} background="#8999bd" borderRadius={2}>
          <Link href="/listProducts" passHref>
            <a href="">Listar Produtos</a>
          </Link>
        </Box>
      )}
    </HStack>
  )
}
