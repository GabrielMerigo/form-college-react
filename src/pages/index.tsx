
import FormTemplate from "templates/FormTemplate"
import { ChakraProvider } from '@chakra-ui/react'
import { Product } from "../components/Table"
import { api } from "services/axios"
import toastr from 'toastr'

const FormRegister = () => {
  const registerProduct = async (data: Product) => {
    try {
      await api.post('/product', data);
      toastr.success('Product has been created with success')
    } catch (err: any) {
      toastr.error(err.request.responseText)
    }
  }

  return (
    <ChakraProvider>
      <FormTemplate
        title="Register Product"
        handleClick={registerProduct}
        nameButton="Register Product"
        hideRegisterLink
      />
    </ChakraProvider>
  )
}
export default FormRegister
