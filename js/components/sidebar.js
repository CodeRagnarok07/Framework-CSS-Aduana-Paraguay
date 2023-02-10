(()=>{

    const app_bars = document.getElementsByClassName("appbar")

    for (const appbar of app_bars) {

        const list = appbar.firstChild


        const title_handle = document.createElement("li")
        title_handle.className = "appbar-title"
        title_handle.innerHTML = `<i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 16L6.5 12L10.5 8" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 17L12.5 12L17.5 7" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></i><strong>ocultar menú</strong>`

        const hiddenStrong = (e) =>{


            const strong_list = list.getElementsByTagName("strong")

            for (let index = 0; index < strong_list.length; index++) {
                const element = strong_list[index];
                element.classList.toggle("hidden")
                
            }


           
            title_handle.firstChild.classList.toggle("rotate-180")

        }


        title_handle.onclick = (e)=> hiddenStrong(e)
        

        list.insertBefore(title_handle, list.firstChild);



    }
})()