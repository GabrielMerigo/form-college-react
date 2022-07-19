
import { Product } from "components/Table"
import FormTemplate from "templates/FormTemplate"

const DeleteProduct = () => {


  return (
    <FormTemplate
      title="Deletar Produto"
      handleClick={() => { }}
      nameButton="Deletar Produto"
      hideDeleteLink
      hasId
    />
  )
}

export default DeleteProduct
