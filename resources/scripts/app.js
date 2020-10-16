const dropdownMenu = () => {
    let dropdownMenu = document.getElementById("dropdownList");
    if(dropdownMenu.className === "") {
        dropdownMenu.className = "responsive-navbar";
    } else {
        dropdownMenu.className = "";
    }
}

document.querySelector(".dropdownIcon").addEventListener("click", dropdownMenu);