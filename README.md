# Portafolio profesional · Sergio Leonardo

Sitio estático (sin instalar nada). Abre `index.html` en el navegador.

## Archivos
- `index.html`: el contenido. Cada `<section id="...">` es una página: `inicio` (Sobre mí), `habilidades`, `proyectos`, `contacto`.
- `styles.css`: colores, tipografías y diseño.
- `script.js`: navegación entre páginas y círculos aleatorios.
- `img/`: todas las imágenes.

## Cómo actualizar
- **Un texto:** búscalo en `index.html` y cámbialo.
- **Una imagen:** reemplaza el archivo en `img/` con el mismo nombre, o cambia la ruta en el `<img src="...">`.
- **Un proyecto nuevo:** en la sección `proyectos`, copia un bloque `<article class="skill">` y edita título, texto e imágenes.
- **Una página nueva:** copia una `<section id="...">`, cambia su `id` y `data-title`; aparece sola en el menú.
- **El azul:** cambia `--blue` al inicio de `styles.css`.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta.
2. En Settings → Pages, elige la rama `main` y la carpeta `/ (root)`.
3. Tu portafolio quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Las tipografías (Audiowide y Questrial) se cargan desde Google Fonts; sin internet se usan tipografías de respaldo.
