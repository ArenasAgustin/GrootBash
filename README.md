# GrootBash

## Shell en Js

Este proyecto de escribir mi propia shell utilizada para implementar funcionalidades y herramientas que voy aprendiendo. Inspirado en Bash.

## Filosofía UNIX

La 'filosofía Unix' fue originada con las reflexiones de Ken Thompson sobre cómo diseñar un sistema operativo pequeño, capaz y con una interfaz de servicio limpia.

Doug McIlroy, el inventor de los Unix pipes y uno de los fundadores de la tradición Unix, decía:

    Lográ que cada programa haga una cosa bien. Para hacer un nuevo trabajo, creá un nuevo programa antes que complicar uno viejo agregando nuevas funciones.
    Esperá que el output de cada programa se convierta en el input de otro todavía desconocido. No llenes el output de información extraña. Evitá los formatos de entrada en columnas o binarios. No insistas con inputs interactivos.
    Diseñá y creá software, incluso sistemas operativos, que sean probados tempranamente (idealmente dentro de semanas). No dudes en descartar las partes torpes y reconstruirlas.
    Usá herramientas para aligerar la tarea de programar, incluso si tenés que desviarte para construirlas. Descartá algunas de ellas después de haberlas usado.

[Acá](https://www.youtube.com/watch?v=tc4ROCJYbm0) hay un video de los 70's para profundizar más en la filosofía Unix.

###  `cat`

Muestra todo el contenido de un archivo, ej: `cat batman`.

### `conuter`

Recibe un numero mayor a 0 como parametro e inicia un contador que imprime por pantalla una cuenta regresiba cada 1 segundo hasta llegar a 0.

### `curl`

`curl` es un comando útil para descargar páginas web. En vez de ejecutarse con el nombre de un archivo, se hace con una URL.
`curl` hará un pedido GET de HTTP a un URL dado, e imprimirá el HTML del response del HTTP.


### `cowsay`

Implementa el modulo cowsay de npm. Recibe como parametro un texto que le manda a cowsay para imprimir un cowsay.

### `cowthink`

Implementa el modulo cowsay de npm. Recibe como parametro un texto que le manda a cowsay para imprimir un cowthink.

### `date`

Con `date` imprime la fecha actual.

### `echo`

Si ejecutaras `echo hola`, va a salir un `hola` en la terminal. Podríamos decir que es el `console.log` de la terminal!

### `head`

Muestra las primeras lineas de un archivo, no todo el archivo. Acepta ademas del nombre del archivo un numero para imprimir esa cantidad de lineas, si no se le pasa este parametro imprime las primeras 6 lineas. Ej: `head textPrueba 8`.

### `help` 

Muestra la lista de comandos del Shell.

### `ls` (list)

Muestra los archivos que hay en el directorio.

### `pwd`

El comando `pwd` imprime el directorio donde estás *parado*.

### `randomsay`

Implementa el modulo cowsay de npm. Recibe como parametro un texto que le manda a cowsay para imprimir un cowsay random.

### `randomthink`

Implementa el modulo cowsay de npm. Recibe como parametro un texto que le manda a cowsay para imprimir un cowthink random.

### `sort`

Devolvera el archivo ordenado lexicográficamente por línea

### `tail`

Muestra las últimas líneas de un archivo. Acepta ademas del nombre del archivo un numero para imprimir esa cantidad de lineas. Si no se le pasa este parametro imprime las ultimas 6 lineas. Ej: `tail textPrueba 7`

### `toBin`

Convierte un String a binario, siempre y cuando tenga un '_' en lugar de los espacios. Ej: `toBin Hello_word`.

### `toChar`

Convierte un String de binarios a Texto, siempre y cuando tenga un '_' binario en lugar de los espacios en binario. Ej: `toChar 01001000011001010110110001101100011011110101111101010111011011110111001001100100`.

### `wc`

`wc` simplemente devuelve el número de líneas del archivo el conteo de palabras y caracteres de un archivo. Ej: `wc textPrueba`.

## Proximamente

### `sort`

Lo reescribirá al archivo si le mandas como parametro -m.

### `uniq`

Si una línea en un archivo es la misma que la línea de arriba, la saca del resultado. Lo reescribe al archivo si le mandas como parametro -m.