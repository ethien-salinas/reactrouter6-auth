# Auth Example

Ejemplo que muestra el concepto de ruta protegida

Asegurate de poner atención a los siguientes conceptos:

- El uso del hook `useNavigate()` y el componente `<Navigate>` para navegar imperativamente después del login y declarativamente cuando un usuario no autenticado visita una ruta en particular
- El uso de `location.state` para preservar la ubicación previa y puedas redirigir al usuario después de ser autenticado
- El uso de `navigate("...", { replace: true })` para reemplazar la ruta `/login` en la pila de historia de navegación y no se pueda regresar a la página de login después de autenticarse
