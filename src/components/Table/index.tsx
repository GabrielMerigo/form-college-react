import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import { Header } from 'components/Header';

export type Product = {
  name: string;
  price: number;
  hasInStorage: boolean;
  _id?: string;
}

type TableProps = {
  data: Product[] | undefined;
}

export function Table({ data }: TableProps) {
  return (
    <>
      <Header hideListLink />
      <ChakraTable fontSize={18} width="40rem" height="16rem" background="#F2F2F2">
        <Thead>
          <Tr>
            <Th><Text fontSize={10}>Name</Text></Th>
            <Th><Text fontSize={10}>Price</Text></Th>
            <Th><Text fontSize={10}>Is There in Storage?</Text></Th>
            <Th><Text fontSize={10}>ID</Text></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((product, index) => (
            <Tr key={index} color={"black"}>
              <Td><Text fontSize={10}>{product.name}</Text></Td>
              <Td><Text fontSize={10}>{product.price}</Text></Td>
              <Td><Text fontSize={10}>{product.hasInStorage ? "Yes" : "No"}</Text></Td>
              <Td><Text fontSize={10}>{product._id}</Text></Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </>
  )
}
