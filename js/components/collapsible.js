
(() => {
    const collapsibles = document.getElementsByClassName("collapsible")

    for (const collapsible of collapsibles) {

        // collapsible.lastChild.className = "hidden"

        // active = (e) => {
        //     console.log("hola mundo");

        //     // e.target.classList.add("active")
        // }


        collapsible.firstChild.onclick = e =>  {
            console.log(e.target);
            e.target.parentNode.classList.toggle("active")
            // e.target.nextElementSibling.classList.toggle("hidden")
        }

    }

})()
