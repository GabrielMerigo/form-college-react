import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import { Header } from 'components/Header';

export type Product = {
  name: string;
  price: string;
  hasInStorage: string;
}

type TableProps = {
  data: Product[] | undefined;
}

export function Table({ data }: TableProps) {
  return (
    <>
      <Header hideListLink />
      <ChakraTable fontSize={18} width="40rem">
        <Thead>
          <Tr>
            <Th><Text fontSize={10}>Nome</Text></Th>
            <Th><Text fontSize={10}>Preço</Text></Th>
            <Th><Text fontSize={10}>Tem no estoque?</Text></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map(product => (
            <Tr>
              <Td><Text fontSize={10}>{product.name}</Text></Td>
              <Td><Text fontSize={10}>{product.price}</Text></Td>
              <Td><Text fontSize={10}>{product.hasInStorage}</Text></Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </>
  )
}
