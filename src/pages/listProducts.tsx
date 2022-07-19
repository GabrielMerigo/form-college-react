
import { Product } from "components/Table"
import { useEffect } from "react";
import FormTemplate from "templates/FormTemplate"

const ListProducts = () => {


  useEffect(() => {
    fetch()
  }, [])



  const data: Product[] = [
    { hasInStorage: 'Sim', name: 'Carne', price: '20.19' },
    { hasInStorage: 'Não', name: 'Bolo', price: '15.88' }
  ];

  return (
    <FormTemplate
      title="Listar Produtos"
      handleClick={() => { }}
      data={data}
      isToRead
      nameButton=""
      hideUpdateLink
    />
  )
}

export default ListProducts
