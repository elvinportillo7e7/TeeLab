const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "MACACARENA",
    "descripcion": "Quan balles sense vergonya i el ritme et domina.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/MACACARENA.png",
      "negro": "img/MACACARENA_BLACK.png",
      "mostaza": "img/MACACARENA.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "NINETIES MODE",
    "descripcion": "Un homenatge pixelat als anys 90.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/NINETIES.png",
      "negro": "img/NINETIES_BLACK.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "RESERVOIR INVADERS",
    "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/RESERVOIR.png",
      "negro": "img/RESERVOIR_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "VITRUVIAN CODE",
    "descripcion": "Art, codi i proporció perfecta.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/VITRUVIAN.png",
      "negro": "img/VITRUVIAN_BLACK.png"
    },
    "tags": ["premium"]
  }
]`;

const productos = JSON.parse(productosJSON);

function init() {
    const contenedor = document.getElementById("lista-productos");

    if (!contenedor) return;
    contenedor.innerHTML = ""; 

    productos.forEach(producto => {
        const carta = document.createElement("article");

        // 1. Imagen
        const primeraImagen = Object.values(producto.imagenes)[0];
        const imagen = document.createElement("img");
        imagen.src = primeraImagen;
        imagen.alt = producto.nombre;
        carta.appendChild(imagen);

        // 2. Título
        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        carta.appendChild(titulo);

        // 3. Descripción (NUEVO)
        const desc = document.createElement("p");
        desc.textContent = producto.descripcion;
        desc.style.fontSize = "0.9em"; // Un poco más pequeño para que quede bien
        desc.style.color = "#555";
        carta.appendChild(desc);

        // 4. Precio
        const precio = document.createElement("div");
        precio.className = "precio";
        precio.textContent = "€" + producto.precioBase.toFixed(2);
        carta.appendChild(precio);

        // 5. Selector
        const selector = document.createElement("select");
        producto.tallas.forEach(talla => {
            const opcion = document.createElement("option");
            opcion.value = talla;
            opcion.textContent = talla;
            selector.appendChild(opcion);
        });
        carta.appendChild(selector);

        // 6. Botón (Sin alert)
        const boton = document.createElement("button");
        boton.textContent = "Comprar";
        boton.addEventListener("click", () => {
            console.log("Producto añadido al carrito (lógica pendiente)");
        });
        carta.appendChild(boton);

        contenedor.appendChild(carta);
    });
}

init();