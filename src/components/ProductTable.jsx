import ProductRow from "./ProductRow";
import "./ProductTable.css"


function ProductTable({ products, searchTerm, isChecked}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.filter(product=>{
                        if(isChecked){
                            return product.inStock &&
                            product.name.toLowerCase().includes(searchTerm.toLowerCase())}
                        else{
                            return product.name.toLowerCase().includes(searchTerm.toLowerCase())
                        }}
                        ).map((oneProduct) =>
                        <ProductRow oneProduct={oneProduct} key={oneProduct.id}/>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ProductTable