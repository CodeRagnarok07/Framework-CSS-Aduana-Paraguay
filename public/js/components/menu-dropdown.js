
(() => {


    const menus = document.getElementsByClassName("menu")
    console.log("hola mundo", menus);



    for (const menu of menus) {
        // console.log(menu, menus)
        // console.log("hola mundo")

        const menu_cont = menu.querySelector(".menu-cont")
        menu_cont.classList.toggle("hidden")
        // menu_cont.classList.toggle("hidden")

        const handleClick = (e) => {
            console.log("hola mundo");
            console.log(menu_cont);
            menu_cont.classList.toggle("hidden")

        }

        menu.onclick = e => handleClick();

    }

})()