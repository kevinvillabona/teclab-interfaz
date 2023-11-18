const containerCards = document.querySelector(".container")

const retornarCardHTML = (producto) => {
    return `<div class="card">
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">$ ${producto.precio}</div>
    <div class="card-button">
        <button type="button" class="button button-outline button-add" id=${producto.id} title="Clic para agregar al carrito">+</button>
    </div></div>`
}

const cargarProductos = (array) =>{
    array.forEach(producto => {
        containerCards.innerHTML += retornarCardHTML(producto)
    });
}

//API2

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add');
    for (const btn of botonesAgregar) {
        btn.addEventListener('click', (e) => {
            agregarAlCarrito(e.target.id);
            almacenarCarrito(); //API 3
          });
    }
}

cargarProductos(productos)
activarClickEnBotones()
