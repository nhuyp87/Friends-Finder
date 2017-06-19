var friends =
    [
        {
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },

        {
            "name": "John",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                1,
                2,
                3,
                4,
                1,
                2,
                3,
                4,
                5,
                1
            ]
        },

        {
            "name": "Joe",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }

    ]

var friendModel = {
    push(data) {
        table.push(data);
    },
    get() {
        return table;
    }
}

module.exports = friendModel;