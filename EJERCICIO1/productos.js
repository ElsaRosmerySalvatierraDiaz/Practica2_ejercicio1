$(document).ready(function() {
    var productos = [];
    var contador = 1;
    
    $("#agregar").click(function() {
      var nombre = $("#nombre").val();
      var descripcion = $("#descripcion").val();
      var precio = $("#precio").val();
      var cantidad = $("#cantidad").val();
      var fecha = new Date().toLocaleDateString();
      
      var producto = {
        id: contador,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        fecha: fecha
      };
      
      productos.push(producto);
      
      $("#tabla-productos").append(
        "<tr>" +
          "<td>" + contador + "</td>" +
          "<td>" + nombre + "</td>" +
          "<td>" + descripcion + "</td>" +
          "<td>" + precio + "</td>" +
          "<td>" + cantidad + "</td>" +
          "<td>" + fecha + "</td>" +
          "<td>" +
            "<button type='button' class='btn btn-primary btn-editar'>Editar</button> " +
            "<button type='button' class='btn btn-danger btn-eliminar'>Eliminar</button>" +
          "</td>" +
        "</tr>"
      );
      
      contador++;
      
      $("#nombre").val("");
      $("#descripcion").val("");
      $("#precio").val("");
      $("#cantidad").val("");
    });
    
    $("#tabla-productos").on("click", ".btn-editar", function() {
      alert("Editar producto con ID " + $(this).closest("tr").find("td:first-child").text());
    });
    
    $("#tabla-productos").on("click", ".btn-eliminar", function() {
      $(this).closest("tr").remove();
    });
  });
  