export const container = document.querySelector(".container")

export const Questions = [
  {
    title: "¿Qué diferencias hay entre var, let, y const?",
    answer: "Las variables <span class='bold'>Var</span> pueden redeclararse, pueden inicializarse vacías y se pueden reasignar. Las variables <span class='bold'>Let</span> pueden inicializarse vacías, pueden redeclararse y se pueden reasginar. Las variables <span class='bold'>Const</span> no pueden inicializarse vacías, no pueden redeclararse y no se pueden reasginar"
  },
  {
    title: "¿Qué son las promesas y cómo funcionan en JavaScript?",
    answer: "TODO"
  },
  {
    title: "Explica la diferencia entre funciones declaradas y funciones flecha.",
    answer: "TODO"
  },
  {
    title: "¿Qué es el this en JavaScript y cómo cambia en diferentes contextos?",
    answer: "TODO"
  },
  {
    title: "¿Cómo manejarías errores en una función asíncrona?",
    answer: "TODO"
  },
  {
    title: "¿Qué es React y por qué se utiliza?",
    answer: "<span class='bold'>React</span> es una biblioteca (librería) de JavaScript para crear interfaces de usuarios"
  },
  {
    title: "Explica la diferencia entre componentes de clase y componentes funcionales",
    answer: "TODO"
  },
  {
    title: "¿Qué son los hooks en React? ¿Cuáles has utilizado?",
    answer: "TODO"
  },
  {
    title: "¿Cómo funciona el hook useEffect y en qué situaciones lo usarías?",
    answer: "El hook <span class='bold'>useEffect</span> siempre se va a renderizar por lo una vez cuando el componente este listo o cuando haya un cambio en sus arreglo de dependencias"
  },
  {
    title: "¿Qué es el estado (state) en React y cómo se actualiza?",
    answer: "En React, habra veces que se quiera almacenar el estado en el que se encuentra la aplicación y para eso se usa el hook <span class='bold'>useState</span> y se actualiza por medio de la función que lo modicafica llamada <span class='bold'>setState</span>"
  },
  {
    title: "¿Qué es el prop drilling y cómo lo resolverías en una aplicación?",
    answer: "El <span class='bold'>prop drilling</span> es cuando tenes múltiples componentes a los cuáles les pasas muchos <span class='bold'>props</span> y se soluciona con un manejador de estado global"
  },
  {
    title: "Explica cómo se maneja el estado global en una aplicación React.",
    answer: "TODO"
  },
  {
    title: "¿Qué es el Context API y cuándo lo utilizarías?",
    answer: "<span class='bold'>Context API</span> es un manejador de estado global. Lo utilizaría cuando tenga muchos estados y asi evitaría el <span class='bold'>prop drilling</span>"
  },
  {
    title: "¿Qué son los componentes controlados y no controlados en React?",
    answer: "TODO"
  },
  {
    title: "¿Qué es el virtual DOM en React y por qué es importante?",
    answer: "TODO"
  },
  {
    title: "¿Cómo mejorarías el rendimiento de una aplicación React?",
    answer: "TODO"
  },
  {
    title: "¿Qué es el memoization y cómo lo usarías en React?",
    answer: "TODO"
  },
  {
    title: "¿Cómo manejarías la carga condicional de componentes en una aplicación?",
    answer: "TODO"
  },
  {
    title: "¿Cómo manejarías la navegación en una aplicación React?",
    answer: "TODO"
  },
  {
    title: "¿Qué es react-router-dom y cómo lo implementarías en una aplicación?",
    answer: "TODO"
  },
  {
    title: "¿Cómo pasar parámetros entre rutas en React Router?",
    answer: "TODO"
  },
  {
    title: "¿Qué es Redux y por qué lo usarías en lugar de useState?",
    answer: "TODO"
  },
  {
    title: "Explica cómo funciona un reducer en Redux.",
    answer: "TODO"
  },
  {
    title: "¿Cómo conectarías Redux con una aplicación React?",
    answer: "TODO"
  },
  {
    title: "¿Cómo probarías un componente React?",
    answer: "TODO"
  },
  {
    title: "¿Qué herramientas has utilizado para hacer testing en React?",
    answer: "Jest, Supertest"
  },
  {
    title: "Explica la diferencia entre pruebas unitarias y pruebas de integración en una aplicación React.",
    answer: "TODO"
  },
  {
    title: "¿Cómo manejarías formularios en React?",
    answer: "TODO"
  },
  {
    title: "¿Qué es un evento sintético en React y cómo funciona?",
    answer: "TODO"
  },
  {
    title: "Explica cómo validarías datos en un formulario React.",
    answer: "TODO"
  },
  {
    title: "¿Qué es Webpack y cómo se relaciona con React?",
    answer: "TODO"
  },
  {
    title: "¿Qué es Babel y por qué lo usarías en un proyecto React?",
    answer: "TODO"
  },
  {
    title: "¿Qué experiencia tienes usando herramientas como Git en proyectos de React?",
    answer: "TODO"
  },
  {
    title: "¿Has trabajado con alguna API en tus proyectos React? ¿Cómo lo hiciste?",
    answer: "Si, he trabajado con APIs. Primero busco la API que quiero usar, veo la estructura de la URL para solicitar la información deseada y hago la consulta con fetch o axios"
  },
  {
    title: "Cuéntame sobre un proyecto en React que hayas hecho. ¿Cuál fue el mayor reto que enfrentaste?",
    answer: "TODO"
  },
  {
    title: "¿Cómo organizarías los archivos y carpetas en un proyecto React?",
    answer: "TODO"
  },
  {
    title: "Si un componente no se está renderizando correctamente, ¿cómo lo depurarías?",
    answer: "TODO"
  },
  {
    title: "Si tienes que implementar una nueva funcionalidad en una aplicación React existente, ¿cuál sería tu proceso?",
    answer: "TODO"
  },
  {
    title: "Si tu aplicación React comienza a ir más lenta, ¿cómo identificarías el problema?",
    answer: "TODO"
  },
]