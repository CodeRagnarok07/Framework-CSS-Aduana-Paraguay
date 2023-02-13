(() => {


    const navbar = document.getElementsByClassName("navbar")



    for (const nav of navbar) {
        console.log(nav.childNodes);

        for (const nav_item of nav.childNodes ) {

            if (nav_item.classList.contains("menu")) {

                const icon = document.createElement("i")
                icon.className = "navbar-menu-icon"
                icon.innerHTML = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `
                // icono hacia abajo

                
                nav_item.appendChild(icon)

                // const handleClick = ()=>{
                //     icon.classList.toggle("rotate-180")
                // }

                // icon.parentNode.onclick = ()=>handleClick()

                

                for (let index = 0; index < nav_item.querySelector(".menu-cont").classList.length; index++) {
                    const element = nav_item.querySelector(".menu-cont").classList[index];            
                    switch (element) {
                        case "down":
                            // console.log("hola mundo es down");
                            break;
                    
                        default:
                            break;
                    }
                }
                




                
            }
        }




    }

})()