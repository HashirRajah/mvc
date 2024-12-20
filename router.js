import PastaController from "./controllers/pastaController.js";
import StarterController from "./controllers/starterController.js"
import PizzaController from "./controllers/pizzaController.js";

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
            PizzaController.list();
            break;
        case "pastas": 
            makeLinkActive(route);
            PastaController.list();
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