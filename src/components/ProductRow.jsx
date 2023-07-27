function ProductRow({oneProduct}) {
    const {name, price, inStock} = oneProduct
    return (
        <tr>
            <td style={{color: inStock ? "black" : "red"}} >{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow