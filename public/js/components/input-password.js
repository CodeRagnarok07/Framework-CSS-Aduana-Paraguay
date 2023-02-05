
(() => {
    const inputs_password = document.getElementsByClassName("input-password")

    for (const input of inputs_password) {
        // const parent_input = document.createElement("div")

        // console.log(input);

        // parent_input.className ="input"

        // // input.classList.add("input")
        // // input.insertBefore(parent_input, input)}
        // input.appendChild()


        const key_icon = document.createElement("span")
        key_icon.className = "material-symbols-outlined cursor-pointer"
        key_icon.innerHTML = "visibility"

        const change_visivility = (e) => {

            if (e.target.previousElementSibling.type === "password") {
                e.target.previousElementSibling.type = "text";
            } else {
                e.target.previousElementSibling.type = "password";
            }

        }


        key_icon.onclick = e => change_visivility(e)

        input.parentNode.appendChild(key_icon)







    }

})()

