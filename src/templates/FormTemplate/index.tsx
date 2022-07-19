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

type FormTemplateProps = {
  title: string;
  nameButton: string;
  handleClick: () => void;
  valueName?: string;
  valuePrice?: string
  valueHasInStorage?: string;
  hideListLink?: boolean;
  hideDeleteLink?: boolean;
  hideRegisterLink?: boolean;
  hideUpdateLink?: boolean;
}

const FormTemplate = ({
  title,
  nameButton,
  handleClick,
  valueName,
  valuePrice,
  valueHasInStorage,
  hideListLink,
  hideDeleteLink,
  hideRegisterLink,
  hideUpdateLink
}: FormTemplateProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
    <Stack padding={5} background="#F2F2F2" height="26rem" width="40rem" spacing={8} direction='column'>
      <Header
        hideListLink={hideListLink}
        hideDeleteLink={hideDeleteLink}
        hideRegisterLink={hideRegisterLink}
        hideUpdateLink={hideUpdateLink}
      />
      <FormControl>
        <Input value={valueName} style={{ color: 'black' }} name="nome" label="Nome Produto" />
        <InputNumber value={valuePrice} style={{ color: 'black' }} name="nome" label="Preço" />
        <Select value={valueHasInStorage} label="It Has In Storage?" name="hasInStorage" options={[
          { name: 'Selecione', value: 'selecione' },
          { name: 'Sim', value: 'sim' },
          { name: 'Não', value: 'nao' }
        ]} />
        <Button onClick={handleClick} marginTop={5} size="lg" colorScheme='blue'>{nameButton}</Button>
      </FormControl>
    </Stack>
  </S.Wrapper >
)

export default FormTemplate
