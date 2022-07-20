import { Product } from "components/Table"
import { useCallback, useEffect, useState } from "react";
import { api } from "services/axios";
import FormTemplate from "templates/FormTemplate"

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    const { data: { products } } = await api.get('products');
    setProducts(products)
  }, [])

  useEffect(() => {
    getProducts();
  }, [getProducts]);


  return (
    <FormTemplate
      title="List Products"
      handleClick={() => { }}
      data={products}
      isToRead
      hideUpdateLink
    />
  )
}

export default ListProducts
