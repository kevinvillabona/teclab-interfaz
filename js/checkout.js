const tablaB = document.querySelector('tbody')
const precioTotal = document.querySelector('#precioTotal')

const retornarTablaHTML = (producto) => {
    return `<tr>
                <td>${producto.nombre}</td>
                <td>${producto.imagen}</td>
                <td>${producto.precio}</td>
                <!-- <td><button class="button button-delete" id="${producto.id}">Quitar</td> -->
            </tr>`
}

if (carritoFrutas.length){
    tablaB.innerHTML = "";
    let totalPrecio = 0
    carritoFrutas.forEach(producto => {
        tablaB.innerHTML += retornarTablaHTML(producto)
        totalPrecio += producto.precio
    });
    precioTotal.textContent = "$"+totalPrecio
}

const finalizarCompra = () =>{
    localStorage.removeItem('carritoFrutas');
    tablaB.innerHTML = "";
    precioTotal.textContent = "$"+0
    alert("¡Gracias por su compra!")
}