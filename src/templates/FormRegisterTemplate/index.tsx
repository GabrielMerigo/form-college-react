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


const FormRegisterTemplate = () => (
  <S.Wrapper>
    <Heading>Registrar Produto</Heading>
    <Stack padding={5} background="#F2F2F2" height="20rem" width="40rem" spacing={8} direction='column'>
      <FormControl>
        <Input style={{ color: 'black' }} name="nome" label="Nome Produto" />
        <InputNumber style={{ color: 'black' }} name="nome" label="Preço" />
        <Select label="It Has In Storage?" name="hasInStorage" options={[
          { name: 'Selecione', value: 'selecione' },
          { name: 'Sim', value: 'sim' },
          { name: 'Não', value: 'nao' }
        ]} />
        <Button marginTop={5} size="lg" colorScheme='blue'>Criar Produto</Button>
      </FormControl>
    </Stack>
  </S.Wrapper >
)

export default FormRegisterTemplate
