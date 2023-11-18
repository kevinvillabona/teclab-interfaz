# [`TECLAB`](https://www.teclab.edu.ar/carrera/tecnico-superior-en-programacion/) | Interfaz de Desarrollo


<div align="center">

  ##### ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

</div>
<details>
<summary>
  
  #### API 1 - Entregado el 24/10/23
  
</summary>
  
> #### Situación
> Desarrollaremos de un e-commerce web para la "Asociación Sudamericana de Productores de Frutas".
> El proyecto incluye la implementación de lógica en JavaScript en un código base de HTML y CSS proporcionado, con el objetivo de crear un mockup funcional del sitio que funcione en computadoras y dispositivos móviles.
>
> #### Consigna
>-  Crear una función llamada retornarCardHTML(producto) en index.js que reciba un objeto literal como parámetro y devuelva un bloque de código HTML utilizando template strings. El bloque de código HTML generado debe representar una card.
>-  Definir una segunda función llamada cargarProductos(array) que acepte un array de objetos como parámetro, llamando la función retornarCardHTML() por cada objeto.
>
> #### _Fecha de entrega: 24/10/23_
</details>

<details>
<summary>
  
  #### API 2 - Entregado el 25/10/23
  
</summary>
  
> #### Situación
> El desarrollo presentado como mockup del proyecto web ha sido un éxito. Ahora es necesario pasar a la siguiente etapa, generando más interactividad sobre el proyecto web.
> 
> #### Consigna
>- Verificar y asegurar que el archivo productos.js contenga una estructura de datos clara y completa que describa todos los productos.
>- Crear un archivo llamado carrito.js que compartirá información entre index.html y checkout.html. Agregar carritoFrutas como un array vacío. Definir una función llamada agregarAlCarrito(frutaId) que valida un ID, busca un producto en el array productos, y lo agrega al array carritoFrutas. Utilizar console.table(carritoFrutas) para verificar que se estén añadiendo productos al carrito.
>- En index.js, agregar un evento click a todos los botones de las cards HTML mediante una función activarClickEnBotones(). Llamar a la función agregarAlCarrito con el ID del producto al hacer clic en un botón.
>- Ejecutar el proyecto con Live Server y verificar en la consola de DevTools que se generen console.table() con los productos agregados al carrito.
>
> #### _Fecha de entrega: 31/10/23_
</details>

<details>
<summary>
  
  #### API 3 - Entregado el 18/11/23 
  
</summary>
  
> #### Situación
> Las pruebas sobre el armado del carrito de compras han sido exitosas. Debemos continuar trabajando en la evolución del mockup. A continuación de las últimas implementaciones realizadas junto a la API del módulo 2, deberemos aplicar las siguientes consignas sobre el código del proyecto trabajado.
> 
> #### Consigna
>- En carrito.js, agregar funcionalidad para almacenar de forma progresiva el array carritoFrutas utilizando LocalStorage como mecanismo de persistencia.
>- Crear una función llamada almacenarCarrito() que valide si carritoFrutas contiene elementos y, en caso afirmativo, los guarde en LocalStorage utilizando JSON.stringify().
>- Implementar la función almacenarCarrito() dentro de agregarAlCarrito() para que el carrito se guarde automáticamente en LocalStorage cada vez que se agregue un producto. Eliminar el uso de console.table() que mostraba el contenido del carrito.
>- Crear una función llamada recuperarCarrito() que recupere la información almacenada en LocalStorage bajo la clave "carritoFrutas". Si la clave no existe, retornar un array vacío utilizando el operador lógico "OR".
>- Mover la creación de carritoFrutas debajo de la función recuperarCarrito() y asignarle el valor retornado por esta función.
>
> #### _Fecha de entrega: 21/11/23_
</details>

<details>
<summary>
  
  #### API 4 - Entregado el -
  
</summary>
  
> #### Situación
> Se deben aplicar los últimos cambios para que el proyecto deje de ser un mockup y se convierta en una demo lo más próxima a un proyecto real. Para cumplimentar esto, se solicitan los cambios finales que dejarán al proyecto cuasi funcional, listo para conectarse a una futura aplicación de backend.
> 
> #### Consigna
>- Integrar el uso de la función fetch (), utilizando promesas para solicitar datos provenientes desde un archivo JSON.
>- Convertir los datos del array productos, y guardarlos en un archivo llamado productos.json.
>- Los datos almacenados y recuperados de forma efectiva desde LocalStorage, se deben visualizar en el documento checkout.html.
>- Agregar una funcionalidad mínima en el botón comprar para que, al ser pulsado, se muestre un mensaje de agradecimiento al usuario por la compra realizada, y se vacíe el array carritoFrutas, al mismo tiempo que también debe vaciarse LocalStorage y la tabla HTML con los productos visualizados.
>  
> #### _Fecha de entrega: 28/11/23_
</details>
