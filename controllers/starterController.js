import Starter from "../models/starter.js";

const StarterController = {
    list() {
        Starter.getAll()
            .then((starters) => {
                console.log(starters);
                let mainContentHtml = `
                    <h3>Starters</h3>
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
                starters.forEach((element, index) => {
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


export default StarterController;