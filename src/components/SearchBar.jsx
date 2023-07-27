function SearchBar({ searchTerm, setSearchTerm, setIsChecked, isChecked }) {

    const handleCheck = (e) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <label>
            Only show products in stock
            <input type="checkbox" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} />
            </label>
        </div>
    )
}

export default SearchBar