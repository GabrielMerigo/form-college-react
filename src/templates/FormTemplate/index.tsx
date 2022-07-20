import * as S from './styles'
import Input from 'components/InputText'
import InputNumber from 'components/InputNumber'
import Select from 'components/Select'
import { Heading } from '@chakra-ui/react'

import {
  FormControl,
  Stack,
  Button
} from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Product, Table } from 'components/Table'
import { AxiosResponse } from 'axios'
import { useState } from 'react'

type FormTemplateProps = {
  title: string;
  nameButton?: string;
  handleClick: (data: Product) => void;
  valueName?: string;
  valuePrice?: string
  valueHasInStorage?: string;
  hideListLink?: boolean;
  hideDeleteLink?: boolean;
  hideRegisterLink?: boolean;
  hideUpdateLink?: boolean;
  isToRead?: boolean;
  data?: Product[];
  hasId?: boolean
}

const FormTemplate = ({
  title,
  nameButton,
  handleClick,
  hideListLink,
  hideDeleteLink,
  hideRegisterLink,
  hideUpdateLink,
  isToRead,
  hasId,
  data
}: FormTemplateProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [hasInStorage, setHasInStorage] = useState('');
  const [idProduct, setIdProduct] = useState('');

  return (
    <S.Wrapper>
      <Heading>{title}</Heading>
      {!isToRead ? (
        <Stack padding={5} background="#F2F2F2" height={hasId ? "29rem" : "24rem"} width="40rem" spacing={8} direction='column'>
          <Header
            hideListLink={hideListLink}
            hideDeleteLink={hideDeleteLink}
            hideRegisterLink={hideRegisterLink}
            hideUpdateLink={hideUpdateLink}
          />
          <FormControl>
            <Input onChange={(e) => setName(e.target.value)} value={name} style={{ color: 'black' }} name="nome" label="Nome Produto" />
            <InputNumber onChange={(e) => setPrice(e.target.value)} value={price} style={{ color: 'black' }} name="nome" label="Preço" />
            <Select
              value={hasInStorage}
              label="It Has In Storage?"
              name="hasInStorage"
              onChange={(e) => setHasInStorage(e.target.value)}
              options={[
                { name: 'Selecione', value: 'selecione' },
                { name: 'Sim', value: 'sim' },
                { name: 'Não', value: 'nao' }
              ]}
            />
            {hasId && (
              <Input onChange={(e) => setIdProduct(e.target.value)} value={idProduct} style={{ color: 'black' }} name="idProduto" label="ID Produto" />
            )}
            <Button
              onClick={() => handleClick(
                {
                  hasInStorage: hasInStorage,
                  price: price,
                  name: name
                }
              )}
              marginTop={5}
              size="lg"
              colorScheme='blue'>{nameButton}</Button>
          </FormControl>
        </Stack>
      ) : (
        <Table data={data} />
      )}

    </S.Wrapper >
  )
}

export default FormTemplate
