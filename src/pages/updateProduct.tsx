
import { Product } from "components/Table"
import { api } from "services/axios"
import FormTemplate from "templates/FormTemplate"
import toastr from 'toastr'

const UpdateProduct = () => {
  const updateProduct = async (data: Product) => {
    try {
      const id = data._id
      delete data._id
      await api.patch(`product/${id}`, data)
      toastr.success("Product updated successfully")
    } catch (err: any) {
      toastr.error(err.request.responseText)
    }
  }

  return (
    <FormTemplate
      title="Update Product"
      handleClick={updateProduct}
      nameButton="Update Product"
      hideUpdateLink
      hasId
    />
  )
}

export default UpdateProduct
