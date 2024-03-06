class Meal {
    constructor(mealName, URL) {
        this.mealName = mealName;
        this.URL = URL;
    }

    fetchRecipe() {
        fetch(this.URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.status);
                }
            })
            .then(data => {
                return data.hits[0].recipe;
            }).catch(error => {
                console.error(error);
            });
        return null;
    }

    setMealName(mealName) {
        this.mealName = mealName;
    }

    getMealName() {
        return this.mealName;
    }

    getURL() {
        return this.URL;
    }

}