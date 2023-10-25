let carritoFrutas = []

const agregarAlCarrito = (frutaId) =>{
    if(frutaId > 0){
        const fruta = productos.find((producto) => producto.id === parseInt(frutaId))
        carritoFrutas.push(fruta)
    }
    console.table(carritoFrutas)
}

