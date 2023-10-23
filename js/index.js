const containerCards = document.getElementById("containerCards")


const retornarCardHTML = (producto) => {
    return `<div class="card">
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">$ ${producto.precio}</div>
    <div class="card-button">
        <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
    </div></div>`
}

const cargarProductos = (array) =>{
    array.forEach(element => {
        containerCards.innerHTML += retornarCardHTML(element)
    });
}

cargarProductos(productos)