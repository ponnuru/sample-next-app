import Link from "next/link";

type Products = {
    id: string
    title: string
}
type PropsProductData = {
    products: Products
};
export default function ProductList({ productsData }: any) {
    return <>
        <ul>
            {productsData &&
                productsData.products.map((product: any) => <li key={product.id}>
                    <Link key={product.id} href={`/products/${product.id}`}>{product.title}
                    </Link></li>)}
        </ul>
    </>
};