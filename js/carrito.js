
const agregarAlCarrito = (frutaId) =>{
    if(frutaId > 0){
        const fruta = productos.find((producto) => producto.id === parseInt(frutaId))
        carritoFrutas.push(fruta)
    }
    //console.table(carritoFrutas)
}
//API 3
const almacenarCarrito = () => {
    if (carritoFrutas.length){
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas))
    } 
}

const recuperarCarrito = () => {
    const carrito = localStorage.getItem('carritoFrutas');
    return carrito ? JSON.parse(carrito) : [];
}

const carritoFrutas = recuperarCarrito();