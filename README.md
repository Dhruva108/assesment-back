# 2. Answers
### 1. Indicate which are the parts of the following url:
- `https://` : _squema_
- `backend.mega-app.com.co :` _host_
- `8080/` : _port_
- `api/articles/search` : _path_
- `?docid=1020&hl=en` : _query string_
- `#dayone` : _fragment_


### 2. Define
##### - Web API
Es una interfaz que contiene y es creada a partir de funciones que le permiten al programador obtener algún _feature_ o _dato_ de alguna app.

##### - Restful
Así como se podría decir que Web API es la arquitectura, RESTful es la aplicación de esa arquitectura.

#### - statusCode:
- `200`: _Respuesta satisfactoria. OK_
- `300`: _Redireccionamiento_
- `400`: _Error del Cliente_
- `500`: _Error del servidor_

Plus: `100`: _Respuesta informativa_
### 3. CRUD
Es el modulo de una app encargada de la creación, lectura, actualización y borrado de elemntos en la base de datos (también se aplica al front para poder hacer los llamados a la API); En el back se puede dividir en dos, "services" y "controllers" donde ambos son CRUDs con responsabilidades específicas.

El anagrama quiere decir:
`Create` - `Read` - `Update` - `Delete`
