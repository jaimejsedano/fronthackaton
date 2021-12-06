$().ready(function () {
  $("#registro").validate({
    debug: false,
    rules: {
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
        number: true,
      },
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
      contrasenia: {
        required: "Introduce tu contraseñal.",
        maxlength: "Debe contener 20 dígitos.",
        minlength: "Debe contener 8 dígitos.",
      },
      edad: {
        required: true,
      },
      errorElement: "div",
    },
  });
});

function verificar() {
  let datos = {
    email: $("#email").val(),
  };
  $.ajax({
    type: "GET",

    dataType: "JSON",
    url: "http://localhost:8080/api/persona/emailexist/" + email,
    data: JSON.stringify(datos),
    success: function (response) {
      console.log(response);
      resultado = response;
      return response;
    },
    error: function (jqXHR, textStatus, errorThrow) {
      alert("Correo ya existe");
    },
  });
}
function registrar() {
  //event.preventDefault();
  //console.log(event);

  //crea un objeto javascript
  let datos = {
    id: $("#id").val(),
    nombre: $("#nombre").val(),
    email: $("#email").val(),
    password: $("#password").val(),
    edad: $("#edad").val(),
  };
  console.log(datos);
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/persona/save",
    data: JSON.stringify(datos),
    dataType: "JSON",
    contentType: "application/JSON",

    success: function (response) {
      console.log(response);
      console.log("se guardo correctamente");
      alert("se guardo correctamente");
      window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //window.location.reload();
      alert("no se guardo correctamente");
    },
  });
}