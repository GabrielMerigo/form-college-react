
import FormTemplate from "templates/FormTemplate"
import { ChakraProvider } from '@chakra-ui/react'
import { Product } from "../components/Table"
import { api } from "services/axios"

const FormRegister = () => {
  const registerProduct = (data: Product) => {
    const response = api.post('/product', data);
    return response
  }

  return (
    <ChakraProvider>
      <FormTemplate
        title="Formulário de Registro"
        handleClick={registerProduct}
        nameButton="Registrar Produto"
        hideRegisterLink
      />
    </ChakraProvider>
  )
}
export default FormRegister
