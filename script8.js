


let arreglo_productos = [];



/* obtener elemento lista ul de productos */
let lista_ul_productos=document.getElementById("listaProductos");



let boton_agregar=document.getElementById("agregar");


let precio_total_productos=document.getElementById("precio_total");

let posicion_li=0;
//--

function agregarProducto() {



  /* primero creemos los elementos y luego vemos cual va dentro del cual */

    let un_li=document.createElement("li");
    
    let spam1=document.createElement("spam");
    let spam2=document.createElement("spam");
    let spam3=document.createElement("spam");
    let spam4=document.createElement("spam");
    let spam5=document.createElement("spam");
    let spam6=document.createElement("spam");
    
    let boton_eliminar=document.createElement("button");
 


    //agregando clases:

    spam1.classList.add("mi-clase");
    spam2.classList.add("mi-clase");
    spam3.classList.add("mi-clase");
    spam4.classList.add("mi-clase");
    spam5.classList.add("mi-clase");
    spam6.classList.add("mi-clase");
    boton_eliminar.classList.add("mi-clase");
 

    /*ahora miremos el texto dentro de cada elemento nuevo creado*/

    spam1.innerHTML="<b>Producto: <b>";
    spam2.innerHTML=document.getElementById("inputProducto").value;
    spam3.innerHTML="<b>Precio: <b>";
    spam4.innerHTML=document.getElementById("inputPrecio").value;
    spam5.innerHTML="<b>Cantidad: <b>";
    spam6.innerHTML=document.getElementById("inputCantidad").value;
  

    boton_eliminar.innerHTML="Eliminar";
 

     /*ahora agreguemos los elementos a li*/

    un_li.appendChild(spam1);
    un_li.appendChild(spam2);
    un_li.appendChild(spam3);
    un_li.appendChild(spam4);
    un_li.appendChild(spam5);
    un_li.appendChild(spam6);
    un_li.appendChild(boton_eliminar);
 

        /*ahora agreguemos li a ul*/
    lista_ul_productos.appendChild(un_li);


    /*******************/

    let titulo_producto = document.getElementById("inputProducto").value;
    let precio_producto = document.getElementById("inputPrecio").value;
    let cantidad_producto = document.getElementById("inputCantidad").value;

    let objeto_producto={};
    objeto_producto.titulo=titulo_producto;
    objeto_producto.precio=precio_producto;
    objeto_producto.cantidad=cantidad_producto;

    arreglo_productos.push(objeto_producto);

  
    // voy a agregar la funcion que se ejecuta al undir el boton eliminar. 
    //Para eliminar todo el li que contenga ese boton

    boton_eliminar.onclick = function() {
 
 
   
      let padre = this.parentNode;
      

      
      posicion_li= Array.from(lista_ul_productos.children).indexOf(padre);
      lista_ul_productos.removeChild(padre);

      //console.log("la posicion a eliminar es: "+posicion_li);

      arreglo_productos.splice(posicion_li, 1);
  
      console.log(arreglo_productos); 

      calcular_precio(arreglo_productos);

    }



    document.getElementById("inputProducto").value="";
    document.getElementById("inputPrecio").value="";
    document.getElementById("inputCantidad").value="";

    console.log(arreglo_productos);
    calcular_precio(arreglo_productos);

}


function borrarTodosProductos() {


    while (lista_ul_productos.lastChild) {
      lista_ul_productos.removeChild(lista_ul_productos.lastChild);
    }



    arreglo_productos = [];
    console.log(arreglo_productos);
    calcular_precio(arreglo_productos);

}


function calcular_precio(arreglo_productos){

  let precio_total=0;
  let valor_a_agregar=0;


  
  arreglo_productos.forEach(function(producto) {
    
   
    valor_a_agregar=producto.precio*producto.cantidad;
    precio_total=precio_total+valor_a_agregar;

  });

  precio_total_productos.innerHTML=precio_total;




}

