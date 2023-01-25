# ChallengeFrontJr

El proyecto espera que tengas corriendo el back en el puerto 8080, está configurado en las variables de entorno igualmente, se puede cambiar.

## Ejecutar proyecto | modo desarrollo

Primero instale todas las dependencias con su package manager de preferencia ya sea npm, pnpm o yarn. Una vez hecho eso, ejecute el comando `ng serve` o `npm run ng serve` en su defecto y ya tendrá la aplicación corriendo en `http://localhost:4200/`.

**_WARNING!!!!_**: Si tiene problemas de CORS con el servidor, es probablemente porque la imagen está desactualizada, faltó una pequeña anotación en la clase encargada de los cors. Para solucionarlo, pare el contenedor actual y vuelva a descargar la imagen con:

```docker run -d -p 8080:8080 daviddeadly/challenge_jr```

## Code coverage
![Screenshot from 2023-01-24 23-22-11](https://user-images.githubusercontent.com/88601542/214479518-a2165139-8f0e-4a5e-a8ef-ac625c618619.png)
