window.onload = () => {
    var prueb = document.querySelectorAll(".dia");
    var prueba = document.querySelectorAll("article");

    prueb.forEach((cosa) => {
        cosa.addEventListener("click", () => {

            prueba.forEach((cosa) => {
                cosa.classList.add("hide");
            })
            var variable = cosa.id;
            var variable2 = document.querySelector(".notice." + variable);
            variable2.classList.toggle("hide");
        })
    })
}

