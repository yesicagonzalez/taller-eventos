const divContainer = document.querySelector("#container");

divContainer.addEventListener("click", (event) => {
    if(event.target === event.currentTarget){
        alert("Hola! Soy el div");
    }
})