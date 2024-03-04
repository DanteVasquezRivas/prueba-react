const Buscador = ({ onBuscar }) => {
    const handleChange = (e) => {
        onBuscar(e.target.value)
    }

    return(
        <input 
        type="text"
        placeholder="Busca tu moneda"
        onChange={handleChange} 
        />
    )
}

export default Buscador