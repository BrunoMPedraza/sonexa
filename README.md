
# Introducción

👋 Bienvenidos y bienvenidas a mi proyecto Frontend,
a continuación procederé a explicar
el funcionamiento de mi aplicación, asi como la forma
de trabajo que emplee desde un principio y mis métodos
para conseguir terminarlo en el lapso de
tiempo que se me pidió.

# Procedimiento

El sitio fue diseñado con el paradigma **Mobile first**, y consiste en cinco secciones
de las cuales 2 tienen el contenido solicitado
y el resto son adicionales para darle un
contexto que tenga sentido, simulando ser
un proyecto real.

No utiliza ninguna libreria de CSS y desde un principio 
fue pensado con variables en gran cantidad, con el objetivo de 
lograr que el sitio sea responsive sin necesidad de demasiados
media query, y con la ilusión de 
llegar al final a meter un modo nocturno (Cosa que se consiguió)

Dediqué el primer día (las primeras horas) solamente
a crear un diseño usando la herramienta
[Figma](https://www.figma.com/file/gFi8IU1dOMTBg80syNWbzY/SOnexa), que a pesar de mi
enorme falta de práctica con la misma pudo orientarme y guiarme durante toda la creación del sitio

Si bien el resultado final no se parece tanto al primer sketch, fue funcional y me ayudó
a ahorrar mucho tiempo.

Tomé ciertas libertades creativas sin perder
el eje de la consigna, por ejemplo se pide que 
post sea enlistado y photos no, sin embargo para 
seguir el eje de la historia que conlleva la página inverti la petición,
no así con la paginación, la cual si la limite a 10 como se me pidió.



# Consigna
Este trabajo práctico tiene como objetivo principal conocer las mejores prácticas del entrevistado, para ello se solicita tomarse el tiempo de leer bien la consigna y entregar el mejor desarrollo posible. Todo componente agregado será considerado como un “Plus”.


1. Crear 1 proyecto llamado “**Front”** .
2. El proyecto de Front que sea creado en **Vue.Js o React.Js**.
3. En el proyecto de Front se desean las siguientes pantallas :
    1. Listar [**post**], el cual debe consumir a la API : [https://jsonplaceholder.typicode.com/posts](https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fjsonplaceholder.typicode.com%2Fposts) y mostrarlo en una lista o tabla.
    2. Listar [**photos**], el cual debe consumir a la API : [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos), esta lista debe tener paginación de 10 en 10, haciendo uso de limit and offset.
4. Utilizar algún estate management y justificar el uso del mismo.
5. Utilizar el manejo de errores o “error handling”.
6. Aplicar las prácticas más usadas a nivel de desarrollo, al igual que librerías que sean de mucha utilidad para que muestren la calidad de tu trabajo.
7. No utilizar Framework CSS.
8. Extra: todo proactividad relacionada al look & feel.


# Instrucciones
### Instalación

Para instalar e inicializar el proyecto localmente, luego de forkearlo debe correr los siguientes comandos desde la consola de VSC:

```bash
  npm i
  npm start
```
### Navegación
Al ingresar en el sitio uno notará que hay una interfaz
en la parte superior, junto a una navbar en la 
parte superior izquierda donde se puede navegar por 
las distintas partes del sitio, a excepción de ERROR 404,
al cual solo se puede acceder al poner mal manualmente
una dirección desde la barra del navegador.

La navegación es tan intuitiva como pude realizarlo, y es posible visitar todos los sitios y retornar a ellos de forma sencilla. A excepción del ya mencionado error 404.

## Consignas a cumplir
 Para la realización del proyecto había varias consignas pedidas, a continuación procedere a enlistar y demostrar como se resolvió cada una.

 - El proyecto se llama front (react ya no permite mayúsculas)✔
 - El proyecto fue creado con react ✔
 - Se consumen post y photos, teniendo photos la lista debido a una decisión creativa. La paginación también se cumple. ✔
- Error handling completo, tanto en caidas del servidor, como en caso de que algo este mal en el link, con diferentes mensajes ✔.
- Utilicé mobile first como paradigma inicial, y modularicé todo lo que el tiempo me permitió. ✔
- No se utilizó ningún framework de CSS, todo es puro CSS. ✔
- Se realizaron varios extras, mencionados en la pestaña "Features adicionales" ✔
 ### Error handling
 Los errores de status, de fetch y además de bad routing fueron tratados en el sitio.
* [Demo](https://ibb.co/7Q5LWn1)


### Modo nocturno
En la parte superior derecha, de forma constante
un casco seguirá al usuario durante la navegación, 
al presionarlo uno puede cambiar entre el modo nocturno 
y el modo tradicional.
* [Demo](https://media.giphy.com/media/kE1Hihj5GCCfrUs4Cy/giphy.gif)
## Dependencias

 - [React](https://github.com/facebook/create-react-app)
 - [React dom](https://github.com/facebook/react/tree/main/packages/react-dom)
- [React router dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom)
- [React scripts](https://github.com/facebook/create-react-app/tree/main/packages/react-scripts)
 - [React icons](https://github.com/react-icons/react-icons)
- [React loader spinners ](https://www.npmjs.com/package/react-loader-spinner)

## Crédito adicional
Agradezco enormemente a Mahendra Bhunwal por otorgar de manera pública y gratuita sus proyectos
de ilustraciones, los cuales utilicé en mi proyecto

- [Mahendra Bhunwal](https://lottiefiles.com/Mahendra)


## Features adicionales

- Diseño responsive
- Imagenes lightweight
- Modo nocturno
- Contacto con whatsapp
- Sitio de error 404
- Capitalización de texto en primer Fetch
- Verificación de ID en navegación de API
- Mock load para ver el spinner de carga
- Las ID pares en segundo fetch se inclian hacia la derecha
- Barra de navegación customizada
