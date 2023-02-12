
(() => {


    const menus = document.getElementsByClassName("menu")



    for (const menu of menus) {
        // console.log(menu, menus)
        // console.log("hola mundo")

        const menu_cont = menu.querySelector(".menu-cont")
        menu_cont.classList.toggle("hidden")
        // menu_cont.classList.toggle("hidden")



        const handleClick = (e) => {
            menu_cont.classList.toggle("hidden")

            const icon = menu.querySelector(".navbar-menu-icon")
            if (icon) {
                icon.classList.toggle("rotate-180")
                menu.classList.toggle("menu-active")
            }


        }

        menu.onclick = e => handleClick();

    }

})()