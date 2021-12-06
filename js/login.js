$().ready(function () {
    $("#sesion").validate({
      debug: false,
      rules: {
        id: {
          required: true,
        },
        nombre: {
          required: true,
          minlength: 6,
        },
        email: {
          required: true,
          email: true,
        },
        contraseña: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 20,
        },
        edad: {
          required: true,
        }
      },
      messages: {
        nombre: {
          required: "Nombre Obligatorio.",
          minlength: "Nombre debe contener minimo 6 caracteres.",
        },
        email: {
          required: "Introduce tu correo.",
          email: "",
        },
        contraseña: {
          required: "Introduce tu contraseñal.",
          maxlength: "Debe contener 20 dígitos.",
          minlength: "Debe contener 8 dígitos.",
        },
        errorElement: "div",
      },
    });
  });
  $(document).ready(function () {
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
function login(){
    //capturar los datos que ingreso el usuario en la pagina
    let email = $("#email").val()
    let password = $("#password").val()

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
        url: "http://localhost:8080/api/persona/"+ email + "/" + password,
        //tipo de peticion
        type: 'GET',

        //tipo de contenido
        dataType: 'json',

        //envio datos capturados por el usuario a la peticion

        //success: funcion con acciones si todo sale ok
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)	
        },

        //error: funcion con acciones si hay error
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);		
            console.log("algo fallo");	
        },
        //complete: funcion con al final de la petición
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
        }
    });
}

/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 * 
 * Configura mensaje de bienvenida o de error según el caso
 */
function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)
        window.location.href = '../paginaincial.html';
        
        
        
}

function estadoInicial(){
    $("#email").focus()
}