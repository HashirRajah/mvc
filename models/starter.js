const Starter = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../db/starters.json")
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

export default Starter;
