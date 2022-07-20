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
import { useState } from 'react'

type FormTemplateProps = {
  title: string;
  nameButton?: string;
  handleClick: any;
  valueName?: string;
  valuePrice?: string
  valueHasInStorage?: string;
  hideListLink?: boolean;
  hideDeleteLink?: boolean;
  hideRegisterLink?: boolean;
  hideUpdateLink?: boolean;
  isToRead?: boolean;
  data?: Product[];
  hasId?: boolean;
  hideFieldsExecptID?: boolean;
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
  data,
  hideFieldsExecptID
}: FormTemplateProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>();
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
            {!hideFieldsExecptID && (
              <>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  style={{ color: 'black' }}
                  name="nome"
                  label="Product Name"
                />

                <InputNumber
                  onInput={(e) => setPrice(Number((e.target as any).value))}
                  value={price}
                  style={{ color: 'black' }}
                  name="name"
                  label="Price"
                />
                <Select
                  value={hasInStorage}
                  label="Is There in Storage?"
                  name="hasInStorage"
                  onChange={(e) => setHasInStorage(e.target.value)}
                  options={[
                    { name: 'Select', value: 'select' },
                    { name: 'Yes', value: 'yes' },
                    { name: 'No', value: 'no' }
                  ]}
                />
              </>
            )}

            {hasId && (
              <Input
                onChange={(e) => setIdProduct(e.target.value)}
                value={idProduct}
                style={{ color: 'black' }}
                name="idProduct"
                label="Product ID"
              />
            )}
            <Button
              onClick={() => {
                const bodies = {
                  register: {
                    hasInStorage: hasInStorage === 'yes' ? true : false,
                    price: (price as number),
                    name: name
                  },
                  update: {
                    hasInStorage: hasInStorage === 'yes' ? true : false,
                    price: (price as number),
                    name: name,
                    _id: idProduct
                  },
                  delete: idProduct
                }

                handleClick((bodies as any)[title.toLowerCase().split(' ')[0]])
              }}
              marginTop={5}
              size="lg"
              colorScheme='blue'>{nameButton}
            </Button>
          </FormControl>
        </Stack>
      ) : (
        <Table data={data} />
      )}

    </S.Wrapper >
  )
}

export default FormTemplate
