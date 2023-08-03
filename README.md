# proyecto-angular

INSTALACION GENERAL

1.  Instalamos angular
    npm install -g @angular/cli
2.  Creamos proyecto
    ng new
3.  instalamos bootstrap
    npm install bootstrap jquery @popperjs/core
    INSTALACION DE PROYECTO

    1.  Página de inicio: Crea un componente para la página de inicio y muestra una bienvenida a los usuarios, junto con un carrusel de imágenes o una lista de las últimas novedades de tu aplicación.
        ng generate component home, header y footer
    2.  Autenticación y registro: Implementa un sistema de autenticación utilizando Angular's HttpClientModule para comunicarse con un servidor backend. Puedes utilizar servicios como Firebase Authentication o implementar tu propio sistema de autenticación.
        2.1 Configurar el servidor backend: Primero, necesitarás configurar un servidor backend que maneje la autenticación y el registro de usuarios. Puedes usar Firebase Authentication o implementar tu propio servidor utilizando tecnologías como Node.js y Express.

            Crear rutas para autenticación y registro: Define las rutas y controladores necesarios para manejar las solicitudes de autenticación y registro. Por ejemplo, podrías tener rutas como /api/login y /api/register que respondan a las solicitudes de inicio de sesión y registro, respectivamente.

            Implementar la lógica de autenticación y registro: En los controladores de las rutas de autenticación y registro, implementa la lógica para verificar las credenciales del usuario, crear nuevos usuarios y generar tokens de autenticación.

            Almacenar información de usuario: Dependiendo de tus necesidades, es posible que desees almacenar información adicional del usuario, como su nombre, correo electrónico, etc. Puedes utilizar una base de datos como MongoDB o MySQL para almacenar esta información.

            Configurar Firebase Authentication (opcional): Si prefieres usar Firebase Authentication en lugar de implementar tu propio sistema de autenticación, puedes seguir la documentación de Firebase para configurar la autenticación en tu aplicación Angular y el proyecto de Firebase.

        2.2 Crear servicios para la autenticación: En Angular, crea un servicio que se comunique con el servidor backend para manejar las solicitudes de autenticación y registro. Por ejemplo, puedes crear un servicio llamado AuthService con métodos como login, register, logout, etc.

        2.3 Utilizar HttpClientModule: Importa el HttpClientModule en el módulo principal (AppModule) para que Angular pueda usar el módulo HttpClient para realizar solicitudes HTTP al servidor backend.

        2.4 Implementar lógica de autenticación en el servicio: En el servicio AuthService, implementa la lógica para enviar solicitudes HTTP al servidor para la autenticación y registro de usuarios. Puedes utilizar métodos como post de HttpClient para enviar datos al servidor.

        2.5 Manejar respuestas del servidor: En el servicio AuthService, maneja las respuestas del servidor y devuelve la información necesaria a los componentes que utilizan el servicio para la autenticación y registro.

        2.6 Crear componentes para el login y registro: Crea dos componentes separados para el login y el registro de usuarios. En estos componentes, utiliza el servicio AuthService para enviar las credenciales del usuario al servidor.

        2.7 Implementar la lógica de autenticación en los componentes: En los componentes de login y registro, implementa la lógica para manejar las respuestas del servidor y realizar acciones adecuadas en función de si la autenticación o el registro fueron exitosos o no.

        2.8 Utilizar guards para proteger rutas: Si tienes páginas que solo deben ser accesibles para usuarios autenticados, puedes utilizar guards de ruta en Angular para proteger esas rutas. Los guards de ruta te permiten controlar el acceso a rutas en función de la autenticación del usuario.

        2.9 Almacenar el estado de autenticación: Para mantener el estado de autenticación del usuario en la aplicación, puedes utilizar servicios o técnicas de almacenamiento local como localStorage o sessionStorage.

4.  En el componente header creamos un nav que enlace con las demas paginas.
5.  Creamos los componentes peliculas y reservas
6.  En el componente de peliculas quiero editar,borrar y añadir

    1. Crea un formulario para agregar y editar películas en el componente PeliculasComponent. El formulario debe tener campos para el título, la descripción, el género, el año de lanzamiento, etc. Puedes utilizar la directiva ngModel para vincular los campos del formulario a propiedades del componente.

    2. Agrega una tabla para mostrar la lista de películas en el componente PeliculasComponent. La tabla debe mostrar información relevante sobre cada película y tener botones para editar y borrar cada película.

    3. Crea métodos en el componente PeliculasComponent para agregar, editar y borrar películas. Por ejemplo, puedes tener métodos como addPelicula(), editPelicula(), deletePelicula(), etc. Estos métodos utilizarán el servicio MovieService para interactuar con la API y realizar las operaciones correspondientes en el servidor.

    4. En el formulario de agregar/editar películas, puedes utilizar la misma plantilla HTML y cambiar su comportamiento dependiendo de si se está agregando una nueva película o editando una existente. Puedes utilizar una variable booleana en el componente para controlar si el formulario está en modo de edición o modo de agregar.

    5. Al hacer clic en los botones de editar y borrar en la tabla de películas, puedes invocar los métodos correspondientes en el componente PeliculasComponent para realizar las operaciones de edición y borrado.

    6. Asegúrate de actualizar la lista de películas en el componente después de agregar, editar o borrar una película para que los cambios se reflejen correctamente en la interfaz de usuario.
