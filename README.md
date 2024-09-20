<div align="center">
<h2>
    <em>Resume</em> minimalista maquetado para web y pdf
</h2>
<p>
Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>

<p>
Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>
y en la <a href="https://github.com/midudev/minimalist-portfolio-json">plantilla</a> de <a href="https://midu.dev">Midudev</a>

</p>

</div>

<div align="center">
    <a href="#🚀-empezar">
        Empezar
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🧞-comandos">
        Comandos
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🔑-licencia">
        Licencia
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://midu.dev">
        Personal
    </a>

</div>

<p></p>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - El framework web de la nueva época.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Menu desplegable con atajos de teclado hecho en puro Javascript.

## 🚀 Empezar

### 1. Usa este [repo](https://github.com/midudev/minimalist-portfolio-json) como _template_ de un proyecto de Astro

- Yo uso [pnpm](https://pnpm.io/installation) como gestor de dependencias y empaquetador.

```bash
# Activa pnpm en MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate

# Inicializa el proyecto
pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```

### 2. Añade tu contenido

Edita los archivos en el directorio `src/cv` para crear tu propio Portafolio/CV imprimible en lenguaje español e inglés, o crea un nuevo archivo para añadir un nuevo idioma.

### 3. Lanza el servidor de desarrollo

```bash
# Disfruta del resultado
pnpm dev
```

1. Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀

## 🧞 Comandos

|     | Comando         | Acción                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Lanza un servidor de desarrollo local en `localhost:4321`.                   |
| ⚙️  | `build`         | Comprueba posibles errores y hace un empaquetado de producción en `./dist/`. |
| ⚙️  | `preview`       | Vista previa en local `localhost:4321`                                       |

## 🔑 Licencia

[MIT](LICENSE.txt) - Basado en el proyecto de [**midudev**](https://midu.dev) y modificado por [**edwarhman**](https://github.com/edwarhman).

# TODO

[x] Cambiar layout Location
[x] city - region
[x] postalCode - Country Code
[x] Estilar field list
[x] añadir separador entre botón y campos
[x] personalizar boton de agregar campo
[x] ajustar ancho botón
[x] cambiar icono de eliminar campo por papelera
[x] cambiar layout según el tipo (external, internal)
[x] agregar margin inferior a footer
[x] quitar separador en el tipo internal
[x] Layout de Trabajos
[x] start date - end date
[x] Layout de Educacion
[x] start date - end date

[x] Corregir que se queda guardada la información inicial cuando se edita el formulario
[x] Cambiar layout footer de FieldsList
[x] Cambiar input active de proyectos a checkbox
[x] Corregir que los títulos de las secciones se muestran aunque no hay información
[x] Corregir que se muestra la foto incluso cuando no hay una URL
[x] Cambiar tamaño y separación de títulos de secciones en el editor
[x] Añadir separación entre listas de trabajos, proyectos y educación
[x] Corregir que no se muestra el titulo de la sección de experiencia
[x] Corregir botón dentro de botón
[x] Corregir errores clip-rule y fill-rule en svg
[] Corregir warning not key prop passed to list item
[] Corregir error no carga correctamente las cuentas sociales predefinidas
[x] Hacer los append field buttons más grandes cuando es tipo external
[] Corregir que no se muestra un mensaje de error en la fecha cuando no hay ninguna
[x] Corregir error de hidratación de react
[] Cambiar información por defecto
[] Corregir que el primer botón de la lista de campos se hace hover cuando no debe
[] Agregar Personal URL al CV
[x] cambiar icono de localización por un map pin
[] Agregar opciones para imprimir, exportar y guardar en formato json
[] Guardar cambios en local storage

