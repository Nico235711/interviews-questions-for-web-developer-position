export const htmlQuestions = document.querySelector(".html-questions");
export const cssQuestions = document.querySelector(".css-questions");
export const jsQuestions = document.querySelector(".js-questions");

export const interviewQuestions = {
  html: [
    {
      title: "¿Para qué sirve la etiqueta &lt;head&gt; en HTML?",
      answer:
        "Sirve para poner todo lo que necesita el navegador como los metadatos, el título de página, las hojas de estilos y los scripts de JS.",
    },
    {
      title:
        "¿En qué se diferencia la etiqueta &lt;head&gt; de la etiqueta &lt;body&gt; en HTML?",
      answer:
        "En la etiqueta &lt;head&gt; se coloca todo lo que necesita el navegador y en el &lt;body&gt; va el contenido de la página.",
    },
    {
      title: "¿Cómo poner una imagen en un documento HTML?",
      answer:
        "Con la etiqueta &lt;img&gt; utilizando el atributo <code>src</code> para la ruta de la imagen.",
    },
    {
      title: "¿Cómo poner un video en una página web usando HTML?",
      answer:
        "Con la etiqueta &lt;video&gt; utilizando el atributo <code>src</code> para la ruta del video y atributos como <code>controls</code> para mostrar los controles del video.",
    },
    {
      title: "¿Para qué sirve un &lt;iframe&gt; en HTML?",
      answer:
        "Un &lt;iframe&gt; permite incrustar documentos externos, como una página web, videos o mapas, dentro de otra página web.",
    },
    {
      title: "¿Cómo crear un formulario en HTML?",
      answer:
        "Un formulario básico se crea con &lt;form&gt;, &lt;div&gt;, &lt;label&gt;, &lt;input&gt;, &lt;button&gt;, y otros elementos según sea necesario.",
    },
    {
      title: "¿Qué hace un botón de tipo &lt;submit&gt; en HTML?",
      answer:
        "Manda la información del formulario a la ruta especificada en el atributo &lt;action&gt; del formulario.",
    },
    {
      title:
        "¿Cuál es la diferencia entre la etiqueta &lt;br&gt; y la etiqueta &lt;hr&gt; en HTML?",
      answer:
        "La etiqueta &lt;br&gt; fuerza un salto de línea, mientras que &lt;hr&gt; crea una línea horizontal que suele utilizarse como separación.",
    },
    {
      title: "¿Cuál es la etiqueta genérica para crear una caja en HTML?",
      answer:
        "La etiqueta &lt;div&gt; se utiliza para crear una caja genérica o contenedor.",
    },
    {
      title: "¿Cuáles son las etiquetas semánticas de HTML5?",
      answer:
        "&lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;main&gt;, &lt;footer&gt; se utilizan para definir diferentes secciones del contenido con significado semántico.",
    },
    {
      title:
        "¿Cuál es la diferencia entre una etiqueta &lt;ol&gt; y una etiqueta &lt;ul&gt; en HTML?",
      answer:
        "&lt;ol&gt; crea una lista ordenada con números o letras, mientras que &lt;ul&gt; crea una lista desordenada con viñetas.",
    },
    {
      title: "¿Con qué etiqueta de HTML puedo poner un texto en cursiva?",
      answer:
        "Con &lt;em&gt; para poner en cursiva con semántica y la etiqueta &lt;i&gt; solo para estilizar sin significado semántico.",
    },
    {
      title: "¿Cómo crear un enlace en HTML?",
      answer:
        "Con la etiqueta &lt;a&gt; y utilizando el atributo <code>href</code> para la URL del enlace.",
    },
    {
      title: "¿Qué diferencia hay entre un &lt;tr&gt; y un &lt;td&gt; en HTML?",
      answer:
        "&lt;tr&gt; define una fila en una tabla, mientras que &lt;td&gt; define una celda dentro de esa fila.",
    },
    {
      title: "¿Cómo abrir un enlace en una pestaña nueva en HTML?",
      answer:
        "En la etiqueta &lt;a&gt; agregándole el atributo <code>target='_blank'</code> para que el enlace se abra en una nueva pestaña o ventana.",
    },
  ],
  css: [
    {
      title: "¿Qué diferencia hay entre un <code>id</code> y una clase en CSS?",
      answer:
        "El <code>id</code> tiene mayor especificidad (importancia) que la <code>class</code>, lo que significa que si hay conflictos en las reglas CSS, el estilo aplicado al <code>id</code> prevalecerá sobre el de la <code>class</code>.",
    },
    {
      title: "¿Cómo seleccionar un <code>id</code> y una clase dentro de CSS?",
      answer:
        "El <code>id</code> se selecciona con el <code>#</code> (hashtag) seguido del nombre del <code>id</code>, mientras que la <code>class</code> se selecciona con el <code>.</code> (punto) seguido del nombre de la <code>class</code>.",
    },
    {
      title:
        "¿Con qué propiedades CSS puedo cambiar el color y el estilo de la fuente?",
      answer:
        "Con <code>color</code> cambias el color del texto y <code>font-style</code> puedes cambiar el estilo de la fuente (por ejemplo, cursiva o normal).",
    },
    {
      title: "¿Cómo puedo cambiar el fondo de una web?",
      answer:
        "Con la propiedad <code>background-color</code> para cambiar el color de fondo, o <code>background-image</code> para agregar una imagen de fondo.",
    },
    {
      title: "¿Cómo puedo dejar fijo un menú en una página web usando CSS?",
      answer:
        "Puedes usar la propiedad <code>position: fixed;</code> en el menú para que permanezca en una posición fija mientras se desplaza la página. Además, puedes usar <code>top</code>, <code>bottom</code>, <code>left</code>, o <code>right</code> para especificar la ubicación exacta del menú en la pantalla. Ejemplo: <code>position: fixed; top: 0; left: 0;</code> para fijar el menú en la parte superior izquierda de la página.",
    },
    {
      title: "¿Cuáles son las distintas formas de posicionar elementos en CSS?",
      answer:
        "Las formas de posicionar elementos en CSS incluyen <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code> y <code>sticky</code>.",
    },
    {
      title:
        "¿Con qué propiedad CSS puedo poner sombras tanto a textos como a cajas?",
      answer:
        "Con la propiedad <code>box-shadow</code> para cajas y <code>text-shadow</code> para textos.",
    },
    {
      title: "¿Cómo puedo poner un borde redondeado a una caja en CSS?",
      answer:
        "Con la propiedad <code>border-radius</code>, puedes especificar el radio de los bordes redondeados.",
    },
    {
      title:
        "¿Cómo puedo adaptar una página web para que sea responsive usando CSS?",
      answer:
        "Puedes usar consultas de medios (media queries) con la regla <code>@media</code> para aplicar diferentes estilos según el tamaño de la pantalla. También puedes usar unidades relativas como <code>em</code>, <code>rem</code>, y <code>%</code> en lugar de unidades fijas como <code>px</code>.",
    },
    {
      title:
        "¿Cómo hacer que el contenido que sobresale de una caja no se vea en CSS?",
      answer:
        "Con la propiedad <code>overflow</code> puedes ocultar el contenido que sobresale de una caja. Los valores comunes son <code>hidden</code>, <code>scroll</code> y <code>auto</code>.",
    },
    {
      title:
        "¿Qué diferencia hay entre <code>flexbox</code> y <code>CSS Grid Layout</code>?",
      answer:
        "<code>flexbox</code> se usa para diseñar elementos en una sola dimensión (fila o columna), mientras que <code>CSS Grid Layout</code> se usa para diseñar elementos en dos dimensiones (filas y columnas).",
    },
    {
      title:
        "¿Cuál es la diferencia entre un preprocesador de CSS y un framework para CSS?",
      answer:
        "Un preprocesador de CSS como Sass o LESS extiende las capacidades de CSS con variables, funciones y otras características avanzadas, mientras que un framework de CSS como Bootstrap o Foundation proporciona un conjunto de estilos y componentes prediseñados listos para usar.",
    },
    {
      title:
        "¿Qué propiedades usarías para hacer efectos y animaciones en CSS?",
      answer:
        "Para efectos y animaciones, usarías <code>transition</code> para transiciones suaves entre estados, y <code>animation</code> junto con <code>@keyframes</code> para animaciones complejas.",
    },
    {
      title: "¿Cómo harías un efecto 3D en un elemento usando CSS?",
      answer:
        "Para un efecto 3D, puedes usar propiedades como <code>transform: perspective()</code> para establecer una perspectiva y <code>transform: rotateX()</code>, <code>rotateY()</code>, y <code>rotateZ()</code> para rotaciones en 3D.",
    },
    {
      title: "¿Cómo manejar las capas y darles prioridad usando CSS?",
      answer:
        "Para manejar las capas y darles prioridad, usa la propiedad <code>z-index</code> en combinación con <code>position</code> (debe ser <code>relative</code>, <code>absolute</code>, o <code>fixed</code>) para controlar el apilamiento de elementos.",
    },
  ],
  javascript: [
    {
      title: "¿Con qué función puedo mostrar una alerta en JavaScript?",
      answer: "Con la función <code>alert()</code>.",
    },
    {
      title:
        "¿Con qué función puedo pasar datos o mostrar algo en la consola del navegador?",
      answer: "Con la función <code>console.log()</code>.",
    },
    {
      title: "¿Cuál es la diferencia entre `let`, `var` y `const`?",
      answer:
        "`var` tiene un alcance de función y puede ser redeclarado, `let` tiene un alcance de bloque y no puede ser redeclarado en el mismo bloque, y `const` también tiene un alcance de bloque pero el valor no puede ser reasignado después de su inicialización.",
    },
    {
      title:
        "¿Cómo detectar el tipo de dato que tiene una variable en JavaScript?",
      answer: "Usando el operador <code>typeof</code>.",
    },
    {
      title:
        "¿Cuáles son las estructuras de control más comunes en JavaScript?",
      answer:
        "Las estructuras de control comunes son <code>if</code>, <code>else</code>, <code>switch</code>, <code>for</code>, <code>while</code> y <code>do...while</code>.",
    },
    {
      title: "¿Qué es un template string?",
      answer:
        "Un template string es una forma de incluir variables y expresiones dentro de cadenas de texto, utilizando las comillas invertidas (<code>`</code>) y la sintaxis <code>${expresión}</code> para interpolar valores.",
    },
    {
      title: "¿Qué es una función de callback?",
      answer:
        "Una función de callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa una operación o se cumple una condición.",
    },
    {
      title: "¿Qué es un array multidimensional?",
      answer:
        "Un array multidimensional es un array que contiene otros arrays como sus elementos, permitiendo representar datos en más de una dimensión (por ejemplo, una matriz).",
    },
    {
      title: "¿Cuál es la diferencia entre `forEach`, `for in` y `for of`?",
      answer:
        "`forEach` itera sobre los elementos de un array, `for in` itera sobre las propiedades enumerables de un objeto, y `for of` itera sobre los valores de una colección iterable (como arrays, cadenas de texto, etc.).",
    },
    {
      title:
        "¿Cómo contar el número de elementos dentro de un array en JavaScript?",
      answer: "Usando la propiedad <code>length</code> del array.",
    },
    {
      title: "¿Cuál es la diferencia entre el DOM y el BOM en JavaScript?",
      answer:
        "El DOM (Document Object Model) representa la estructura del documento HTML o XML como un árbol de nodos, mientras que el BOM (Browser Object Model) proporciona acceso a las funcionalidades del navegador, como el historial y la ventana.",
    },
    {
      title:
        "¿Qué métodos de JavaScript hay para seleccionar elementos del DOM?",
      answer:
        "Los métodos comunes para seleccionar elementos del DOM son <code>getElementById()</code>, <code>getElementsByClassName()</code>, <code>getElementsByTagName()</code>, <code>querySelector()</code>, y <code>querySelectorAll()</code>.",
    },
    {
      title: "¿Cuál es la diferencia entre los eventos `blur` y `focus`?",
      answer:
        "El evento <code>focus</code> se activa cuando un elemento recibe el foco, mientras que el evento <code>blur</code> se activa cuando un elemento pierde el foco.",
    },
    {
      title:
        "¿Cuáles son las diferentes formas de manejar eventos en JavaScript?",
      answer:
        "Las formas de manejar eventos incluyen el uso de atributos HTML como <code>onclick</code>, métodos de eventos como <code>addEventListener()</code>, y el manejo de eventos en línea con funciones en el propio HTML.",
    },
    {
      title: "¿Cómo guardar un objeto JSON en el localStorage?",
      answer:
        "Utilizando <code>localStorage.setItem('clave', JSON.stringify(objeto));</code> para guardar el objeto como una cadena JSON.",
    },
    {
      title: "¿Cómo hacer una petición a una ruta de un API en JavaScript?",
      answer:
        "Puedes usar el método <code>fetch()</code> para hacer peticiones a una API. Ejemplo: <code>fetch('ruta/api').then(response => response.json()).then(data => console.log(data));</code>.",
    },
    {
      title: "¿Con qué objeto se manejan las fechas en JavaScript?",
      answer: "Con el objeto <code>Date</code>.",
    },
    {
      title: "¿Qué es una promesa en JavaScript?",
      answer:
        "Una promesa es un objeto que representa la eventual finalización (o fallo) de una operación asíncrona y su valor resultante.",
    },
    {
      title: "Menciona dos frameworks de JavaScript.",
      answer: "Dos frameworks de JavaScript son React y Angular.",
    },
    {
      title:
        "¿Se puede hacer backend con JavaScript? ¿Con qué lo harías si es posible?",
      answer:
        "Sí, se puede hacer backend con JavaScript usando Node.js. Puedes utilizar frameworks como Express para facilitar el desarrollo del servidor.",
    },
  ],
};
