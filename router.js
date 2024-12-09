import StarterController from "./controllers/starterController.js"

document.addEventListener("DOMContentLoaded", () => {
    let route = new URLSearchParams(window.location.search).get("route");

    if (!route) return;

    route = route.toLowerCase();
    switch(route) {
        case "starters": 
            makeLinkActive(route);
            StarterController.list();
            break;
        case "pizzas": 
            makeLinkActive(route);
            break;
        case "pastas": 
            makeLinkActive(route);
            break;
        default:
            console.log("d");
    }
});

const makeLinkActive = (activeLink) => {
    const routes = ["starters", "pizzas", "pastas"];
    routes.forEach((route) => {
        const link = document.querySelector(`#${route}-link`);
        if (route === activeLink) {
            link.classList.add("active");
            return;
        }

        link.classList.remove("active");
    });
}