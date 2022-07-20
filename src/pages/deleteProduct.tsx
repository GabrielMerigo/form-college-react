import { api } from "services/axios"
import FormTemplate from "templates/FormTemplate"
import toastr from 'toastr'

const DeleteProduct = () => {
  const deleteProduct = async (productId: number) => {
    try {
      await api.delete(`product/${productId}`)
      toastr.success(`Successfully deleted`)
    } catch (err: any) {
      toastr.error(err.request.responseText)
    }
  }

  return (
    <FormTemplate
      title="Delete Product"
      handleClick={deleteProduct}
      nameButton="Delete Product"
      hideDeleteLink
      hasId
      hideFieldsExecptID
    />
  )
}

export default DeleteProduct
