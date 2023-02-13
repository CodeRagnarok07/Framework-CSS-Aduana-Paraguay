


setTimeout(() => {


    const menus = document.getElementsByClassName("menu")



    for (const menu of menus) {
        // console.log(menu, menus)
        // console.log("hola mundo")

        const menu_cont = menu.querySelector(".menu-cont")
        menu_cont.classList.toggle("hidden")
        // menu_cont.classList.toggle("hidden")

        if(menu.classList.contains("menu-arrow")){

            const icon = document.createElement("i")
            icon.className = "navbar-menu-icon"
            icon.innerHTML = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `
            // icono hacia abajo
            menu.appendChild(icon)
        }



        const handleClick = (e) => {
            menu_cont.classList.toggle("hidden")
            menu_cont.classList.toggle("show")
            const icon = menu.querySelector(".navbar-menu-icon")
            if (icon) {
                icon.classList.toggle("rotate-180")
                menu.classList.toggle("menu-active")
            }


        }

        menu.onclick = e => handleClick();

    }

},500)()