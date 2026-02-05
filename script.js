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
]
`;

const productos = JSON.parse(datos);

function init() {
    mostrarCartas();
}

function mostrarCartas() {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = ""; // Limpiar

    // Recorremos cada producto y creamos sus etiquetas
    productos.forEach(producto => {
        
        // 1. Crear el envoltorio (article)
        const carta = document.createElement("article");

        // 2. Crear Imagen
        const img = document.createElement("img");
        img.src = producto.img;
        carta.appendChild(img);

        // 3. Crear Título
        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        carta.appendChild(titulo);

        // 4. Crear Precio (usamos una clase simple 'precio' para el color verde)
        const precio = document.createElement("div");
        precio.className = "precio";
        precio.textContent = `€${producto.precio.toFixed(2)}`;
        carta.appendChild(precio);

        // 5. Crear Selector de Tallas
        const select = document.createElement("select");
        producto.tallas.forEach(talla => {
            const opcion = document.createElement("option");
            opcion.value = talla;
            opcion.textContent = talla;
            select.appendChild(opcion);
        });
        carta.appendChild(select);

        // 6. Crear Botón
        const boton = document.createElement("button");
        boton.textContent = "Comprar";
        boton.addEventListener("click", () => {
            alert("Añadido: " + producto.nombre);
        });
        carta.appendChild(boton);

        // Finalmente, añadimos la carta al contenedor principal
        contenedor.appendChild(carta);
    });
}