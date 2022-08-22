function validacion(){
    const email = document.getElementById("email");
    const contraseña = document.getElementById("contrasena");    
    const boton = document.getElementById("regBtn");

    boton.addEventListener("click", ()=>{
        if (email.value != "" || contraseña.value != ""){
            window.location = "portada.html";
    }else{
        alert('Debe rellenar todos los campos');
    }
   
    })
}

validacion();