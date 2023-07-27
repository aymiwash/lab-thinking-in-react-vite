import { useState } from "react"
import jsonData from "../data.json"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"


function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    const [searchTerm, setSearchTerm ] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <div>IronStore</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isChecked={isChecked} setIsChecked={setIsChecked}/>
                <ProductTable products={products} searchTerm={searchTerm} isChecked={isChecked}/>
            </div>

        </>
    )
}

export default ProductsPage