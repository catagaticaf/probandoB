JSONparse(localStorage.getItem('carrito'))
function pintarCarrito(){
    let carritoHTML = document.getElementById('contenedor-carrito')
    carrito.forEach(producto=>{
    let componenteCarrito = document.createElement("div")
    componenteCarrito.innerHTML = `
    <tbody>
    <tr>
        <th scope="row"></th>${producto.cantidad}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.precio * producto.cantidad}</td>
    </tr>
    
    `
    carritoHTML.appendChild(componenteCarrito);
    })
}
pintarCarrito()