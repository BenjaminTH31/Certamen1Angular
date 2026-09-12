\--Conecta Estudiante--

Aplicación web frontend desarrollada con Angular 22 para gestionar la inscripción de estudiantes a actividades.



Vistas:



\- Inicio

\- Actividades

\- Contacto

\- Inscripción



Rutas:



\- /actividades

\- /contacto

\- /inscripcion



Formulario:



La vista Inscripción utiliza un formulario reactivo con FormGroup y FormControl.

El formulario permite ingresar nombre, apellido, correo, carrera, actividad, jornada y comentario.



\- Nombre obligatorio y mínimo 3 caracteres.

\- Apellido obligatorio y mínimo 3 caracteres.

\- Correo obligatorio y formato válido.

\- Carrera obligatoria.

\- Actividad obligatoria.

\- Jornada obligatoria.









\----Etapa 1: Estructura inicial



Se creó el proyecto Angular 22 y se preparó la estructura inicial de componentes y páginas que utilizará la aplicación.





\----Etapa 2: Navegación

Se configuró Angular Router para permitir la navegación entre las diferentes vistas de la aplicación.
Se implementaron las rutas:

* Inicio
* Actividades
* Contacto
* Inscripción

También se utilizaron routerLink, routerLinkActive y router-outlet.





\----Etapa 3: Formulario y validaciones



Se implementó un formulario reactivo utilizando FormGroup y FormControl.



El formulario contiene:



\- Nombre

\- Apellido

\- Correo electrónico

\- Carrera o programa

\- Actividad

\- Jornada

\- Comentario



Se agregaron validaciones para campos obligatorios, mínimo de caracteres y formato de correo electrónico.





\----Etapa 4: Integración y versión final



Se incorporaron los estilos CSS, se realizaron pruebas de navegación y formulario y se verificó la compilación mediante ng build.

