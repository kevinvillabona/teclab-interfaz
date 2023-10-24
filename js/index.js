const containerCards = document.querySelector(".container")

const retornarCardHTML = (producto) => {
    return `<div class="card">
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">$ ${producto.precio}</div>
    <div class="card-button">
        <button type="button" class="button button-outline button-add" id=${producto.nombre} title="Clic para agregar al carrito">+</button>
    </div></div>`//Problema: Los productos no contienen id.
}

const cargarProductos = (array) =>{
    array.forEach(producto => {
        containerCards.innerHTML += retornarCardHTML(producto)
    });
}

cargarProductos(productos)