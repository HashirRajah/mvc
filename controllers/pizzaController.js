import Pizza from "../models/pizza.js";

const PizzaController = {
    list() {
        Pizza.getAll()
            .then((pizzas) => {
                console.log(pizzas);
                let mainContentHtml = `
                    <h3>Pizzas</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                `;
                pizzas.forEach((element, index) => {
                    mainContentHtml += `
                        <tr>
                            <th scope="row">${index + 1}</th>
                            <td>${element.name}</td>
                            <td>${element.price}</td>
                            <td>${element.rating} <i class="bi bi-star-fill"></i></td>
                        </tr>
                    `;
                });
                mainContentHtml += `
                        </tbody>
                    </table>
                `;
                const mainContent = document.querySelector(`#main-content`);
                mainContent.innerHTML = mainContentHtml;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};


export default PizzaController;