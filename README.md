API REST (GET y POST) express server en Typescript para deploy automatico en Heroku
-------------------------------
Api Rest Node.js + Express escrito en Typescript para hacer deploy directamente en heroku sin instalar en local.

Deploy: Crea una app en Heroku e importa el código en Heroku.

Heroku descarga las librerias necesarias y dispara el proceso web definido en [Procfile](Procfile) que construye e inicializa la aplicación. En local normalmente se requiere agregar typescript como una dependencia de desarrollo (--save-dev) en el package.json.
pero esto no trabaja en Heroku porque estas dependencias no están descargadas allí.
(debido a que `NODE_ENV` se establece en` producción`). Para solucionar esto se requiere agregar typescript como una dependencia regular y hacer build del proyecto en cada push.
