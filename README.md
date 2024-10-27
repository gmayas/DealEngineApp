# DealEngineApp

Este proyecto fue creado con Angular CLI versión 18.2.6., al momento de descargar este proyecto, instale las dependencias con npm install, para ejecutar npm run dev, la aplicación corre en: http://localhost:4200/. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## DealEngineApp

DealEngineApp fue creado como proyecto de prueba para la vacante como Desarrollador dentro de la empresa Deal Engine, es una aplicación en base a información de vuelos, se necesito saber el clima del aeropuerto origen y aeropuerto destino, con una simple consulta de su número de abordaje.

## Flight Board.

En Flight Board vera el clima de los aeropuertos destino de los viajes actuales.

![](/imagenes/01.png)

Si desea ver la información del clima de su vuelo, solo introduzca su número de abordaje y de click en el botón de buscar.

![](/imagenes/02.png)

Y verá la infracción detallada de su vuelo.

![](/imagenes/03.png)

## CI/CD

Del lado de integración continua y despliegue continuo tenemos su Workflow, Actions, Runner y servidor correspondiente Linux, y PM2 para la ejecución de la APP, como así su dominio URL y certificado correspondiente.

Workflow creado para la puesta en operación a través de Actions y Runners, como así su ejecución con PM2.

![](/imagenes/04.png)

Actions ejecutado después de commit and push a la rama main.

![](/imagenes/05.png)

Runner configurado hacia la máquina virtual Linux.

![](/imagenes/06.png)

PM2 monitoreando la ejecución de la aplicación en la máquina virtual Linux. 

![](/imagenes/07.png)

Despliegue en operación con URL y certificado.

https://gmayasapp.site/

![](/imagenes/08.png)

Si deseas ver el código de su Api Rest, solo da click en la siguiente url:

https://github.com/gmayas/DealEngineApi.git

`© 2024 Copyright: GMayaS C:\>Desarrollo en Sistemas.`
