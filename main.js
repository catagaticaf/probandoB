

//así traemos nuestros objetos de json:
const fetchData = async()=>{
  try {
    const resp = await fetch('productos.json')
    const data = await resp.json()
    //console.log(data)
    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
}

//asi nos aseguramos que el archivo html cargue antes que el fetchData
document.addEventListener('DOMContentLoaded',()=>{
  fetchData()
})

//

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Armando las cards de los productos con fetch
const pintarCards = data =>{
  let container = document.getElementById("contenedor-cards");
  let botones = document.getElementsByClassName('btn')
  data.forEach(producto => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="col">
          <div class="card">
            <img src="./img/${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <button id="btn-compra" class="btn-compra btn btn-light botones" data-id="${producto.id}">Agregar al carrito</button>
            </div>
          </div>
        </div>
    `;
    
    container.appendChild(card);

    
  });
    const btnAdd = document.querySelectorAll('.btn-compra')
    btnAdd.forEach(btn => {
      btn.addEventListener('click', (e)=> agregarAlCarrito(e, data))
    })
}

function agregarAlCarrito(e, arrayProductos){
  //console.log(producto)
  //console.log(e.target.dataset.id)

  const productoSeleccionado = arrayProductos.find (el => el.id === parseInt(e.target.dataset.id))
  console.log(productoSeleccionado)
  //carrito.push(productoSeleccionado)
  swal({
    title: 'El producto se agrego correctamente al carrito!',
    icon: 'success',
});
  const producto =
  {
    id: productoSeleccionado.id,
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    cantidad: 1,
  }


  const existe = carrito.some ( p => p.id ===  parseInt(e.target.dataset.id))
  if (existe){
    const indice = carrito.findIndex ( p => p.id === parseInt(e.target.dataset.id))
    carrito[indice].cantidad++;
  } else {
    carrito.push(producto)
  }
  console.log(carrito)
}








