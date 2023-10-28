import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element
    .map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`
    })
    .join('');
};

const galleryHandler = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const originalUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${originalUrl}">`)
    instance.show();

    window.addEventListener('keydown', onEscPress);
    
    function onEscPress(event){
        const ESC_KEY_CODE = 'Escape';
        if (event.code === ESC_KEY_CODE) {
            instance.close();
        };
    };
};

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);
galleryContainer.addEventListener('click', galleryHandler);


/*

Tarea 1 - Galería de imágenes

Cree una galería con la posibilidad de hacer clic en los elementos y ver una imagen a tamaño completo 
en una ventana modal. Vea un vídeo demo de la galería.

Ejecute esta tarea en los archivos 01-gallery.html y 01-gallery.js. Desglóselo en varias subtareas:

Creación y renderización de la marca basada en el array de datos galleryItems y la plantilla de elementos 
de la galería proporcionada.
Implementación de la delegación a ul.gallery y obtención de url de un gran imagen.
Conectar el script de la ventana modal y los estilos de la biblioteca basicLightbox. 
Utilice CDN servicio jsdelivr y añadir referencias a archivos de biblioteca minificados (.min) al proyecto.
Abra una ventana modal haciendo clic en un elemento de la galería. Para ello, 
consulte documentación y los ejemplos.
Sustitución del atributo src del elemento <img> en la ventana modal antes de apertura. 
Use el diseño ya hecho de la ventana modal con la imagen de los ejemplos de la biblioteca basicLightbox.
Marcar el elemento de la galería
El enlace a la imagen original debe almacenarse en data-atributo source del elemento <img>, 
y debe estar especificado en el href del enlace. No añada ningún otro tag HTML o distintas clases CSS en esta plantilla.

<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

Tenga en cuenta que la imagen está envuelta en un enlace, lo que significa que cuando el usuario 
hace clic será redirigido a otra página por defecto. Desactive este comportamiento por defecto.

Cierre desde el teclado
ATENCIÓN
La siguiente funcionalidad no es obligatoria a la hora de entregar una tarea, pero sería 
una buena práctica adicional.

Añada cerrar la ventana modal pulsando Escape. Hágao de manera que el teclado sólo se escuche 
mientras la ventana modal este abierta. En la biblioteca basicLightbox existe un método 
para para cerrar la ventana modal de forma programada.

EXPLICACIÓN

Este código crea una galería de imágenes que muestra una imagen ampliada al hacer clic en ella y permite cerrarla al presionar la tecla "Escape". De la siguiente manera:

1. Se importa el objeto `galleryItems` de un archivo llamado `'./gallery-items.js'`.

2. Se selecciona el contenedor de la galería utilizando `document.querySelector()`.

3. Se llama a la función `createGalleryItem(galleryItems)` y asigna el resultado a la constante `photosMarkup`.

4. Se define la función `createGalleryItem(element)` que toma un elemento y crea el markup HTML para cada item de la galería utilizando el método `map()` en el array `element`.

5. Se crea un evento `galleryHandler` que se activa al hacer clic en un elemento de la galería.

6. Dentro de `galleryHandler`, se verifica si el elemento clicado es una imagen (`event.target.nodeName === 'IMG'`).

7. Si es una imagen, obtiene la URL original de la imagen a través del atributo `data-source` del elemento y crea una instancia de `basicLightbox` con esa URL.

8. Muestra la instancia de `basicLightbox`.

9. Se agrega un evento de escucha para capturar cuando se presiona la tecla "Escape" (`keydown`) y cierra la instancia de `basicLightbox` si se detecta esa tecla.

10. Se inserta el markup HTML generado en el paso 3 dentro del contenedor de la galería utilizando `insertAdjacentHTML()`.

11. Se agrega un evento de clic en el contenedor de la galería que activa la función `galleryHandler`.


*/
