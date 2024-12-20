const Pizza = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../db/pizzas.json")
                .then((response) => {
                    if (response.status !== 200) {
                        reject();
                    }

                    return response.json();
                })
                .then((data) => resolve(data));
        });
    },
};

export default Pizza;
