
import FormTemplate from "templates/FormTemplate"
import { ChakraProvider } from '@chakra-ui/react'

const FormRegister = () => (
  <ChakraProvider>
    <FormTemplate
      title="Formulário de Registro"
      handleClick={() => { }}
      nameButton="Registrar Produto"
      hideRegisterLink
    />
  </ChakraProvider>
)

export default FormRegister
