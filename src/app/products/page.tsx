import ProductList from "./product-list";

export default async function products() {
  const products = await fetch(`https://dummyjson.com/products`);
  const productsData = await products.json();
  return <>
    Current Products List
    <ProductList productsData={productsData} />
  </>;
}