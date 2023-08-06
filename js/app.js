const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header-toggle");

setInterval(() => {
    if(header.classList.contains("hidden")){
        header.classList.remove("hidden");
        headerToggle.classList.add("hidden");    
    } else {
        header.classList.add("hidden");
        headerToggle.classList.remove("hidden");
    }
}, 7000);
