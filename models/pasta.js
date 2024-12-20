const Pasta = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../db/pastas.json") // Ensure this path is correct relative to your index.html
                .then((response) => {
                    if (!response.ok) {
                        reject();
                        return;
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch(() => reject());
        });
    },
};

export default Pasta;
