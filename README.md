# Trabajo Evaluativo N° 1 - React Native

Explicacion de los componentes:

## App.jsx

Este archivo es el principal del proyecto. Se encarga de renderizar los componentes.

La aplicacion se envuelve en un ThemeProvider para gestionar las preferencias del tema. Renderiza el componente Counter como el Timer.

## Counter.jsx

Muestra un contador con botones de incremento y decremento.

Utiliza useState para manejar la variable de estado count. Accede al valor de theme del contexto usando useTheme. Renderiza botones de incremento y decremento, llamando a las funciones increment y decrement al hacer clic.

## ThemeContext.jsx

Crea un contexto de React para administrar y compartir informacion del tema entre componentes.

Crea un contexto de react usando createContext.
ThemeProvider es el que envuelve a los componentes secundarios, proporcionando un valor theme y una funcion toggleTheme para gestionar el tema.
useTheme es un hook personalizado para acceder al valor del tema desde el contexto en toda la aplicacion.

## Timer.jsx

Muestra un temporizador que cuenta segundos.

Utiliza el hook useState para manejar la variable de estado seconds.
Accede al valor de theme del contexto usando useTheme.
useEffect inicia un intervalo del temporizador utilizando setInterval para incrementar el estado seconds cada segundo.
Por ultimo, se muestra el valor actual de los segundos dentro de un parrafo.