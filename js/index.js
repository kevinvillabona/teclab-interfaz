let containerCards = document.getElementById("containerCards")
containerCards.innerHTML = "";

const retornarCardHTML = (producto) => {
    return `
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">$ ${producto.precio}</div>
    <div class="card-button">
        <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
    </div>`
}

const cargarProductos = (array) =>{
    array.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = retornarCardHTML(element)
        containerCards.appendChild(card)
    });
}

cargarProductos(productos)