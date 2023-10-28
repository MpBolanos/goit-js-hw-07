import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element
    .map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>`
    })
    .join('');
};

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const lightbox = new SimpleLightbox('.gallery a');


/*

Tarea 2 - biblioteca SimpleLightbox

Cree la misma galería que en la primera tarea, pero usando la biblioteca SimpleLightbox, 
que se encargará de manejar los clics en las imágenes, abriendo y cerrando la ventana modal, 
y desplazándose por las imágenes con el teclado.

Si necesita cambiar ligeramente el diseño de la tarjeta de la galería, use esta plantilla.

<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>

Ejecute esta tarea en los archivos 02-lightbox.html y 02-lightbox.js. Divídalo en varias subtareas:

Creación y visualización de marcas a partir del conjunto de datos galleryItems y la plantilla de elementos 
de la galería proporcionada. Use el código terminado de la primera asignación.
Añada al script y los estilos de la biblioteca usando CDN servicio cdnjs. Debe añadir los enlaces a los 
dos archivos: simple-lightbox.min.js y simple-lightbox.min.css.
Inicialización de la biblioteca después de crear y añadir los elementos de la galería en un ul.gallery. 
Para ello, lea la documentación SimpleLightbox , principalmente de las secciones «Usage» y «Markup».
Mire la sección «Opciones» de la documentación y añada una pantalla de subtítulos las imágenes del 
atributo alt. Deje que el pie de foto esté en la parte inferior y aparezca a 250 milisegundos 
después de abrir la imagen.

EXPLICACIÓN

Este código crea una galería de imágenes utilizando los datos del array `galleryItems`. 
Cada imagen se muestra como un enlace en la galería, y al hacer clic en una imagen 
se abre en un lightbox para verla en tamaño completo.. De la siguiente manera:

1. Se importa el array `galleryItems` desde un archivo externo.

2. Se selecciona el contenedor de la galería en el DOM utilizando `document.querySelector(".gallery")`.

3. Se define una función llamada `createGalleryItem` que toma como argumento el array `galleryItems`.

4. Se utiliza el método `map` en el array `galleryItems` para iterar sobre cada elemento y
 generar un fragmento de código HTML para cada imagen de la galería.

5. Cada fragmento de código HTML consiste en un enlace `<a>` con una imagen `<img>` dentro, 
donde se establecen los atributos `href`, `src` y `alt` utilizando los datos del elemento correspondiente en el array.

6. Se utiliza el método `join('')` para convertir los fragmentos de código HTML en una sola cadena de texto.

7. Se inserta la cadena de texto generada en el contenedor de la galería 
utilizando `galleryContainer.insertAdjacentHTML("beforeend", photosMarkup)`.

8. Se crea una instancia de la clase `SimpleLightbox`, pasando como argumento 
el selector CSS que apunta a los elementos `<a>` dentro de la galería (`'.gallery a'`). 
Esto inicializa el lightbox para que funcione con las imágenes de la galería.

*/