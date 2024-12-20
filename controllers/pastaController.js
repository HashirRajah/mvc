import Pasta from "../models/pasta.js";

const PastaController = {
    list() {
        Pasta.getAll()
            .then((pastas) => {
                console.log(pastas);
                let mainContentHtml = `
                    <h3>Pastas</h3>
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
                pastas.forEach((element, index) => {
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
                const mainContent = document.querySelector(`#main-content`);
                mainContent.innerHTML = `<h3>Error loading pastas. Please try again later.</h3>`;
            });
    },
};

export default PastaController;
