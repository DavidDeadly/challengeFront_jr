# ChallengeFrontJr

El proyecto espera que tengas corriendo el back en el puerto 8080, está configurado en las variables de entorno igualmente, se puede cambiar.

## Development server

Primero instale todas las dependencias con su package manager de preferencia ya sea npm, pnpm o yarn. Una vez hecho eso, ejecute el comando `ng serve` y ya tendrá la aplicación corriendo en `http://localhost:4200/`.

**_WARNING!!!!_**: Si tiene problemas de CORS con el servidor, es probablemente porque la imagen está desactualizada, faltó una pequeña anotación en la clase encargada de los cors. Para solucionarlo, pare el contenedor actual y vuelva a descargar la imagen con:

```docker run -d -p 8080:8080 daviddeadly/challenge_jr```
