var friends =
    [
        {
            "name": "Ahmed",
            "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/5024-200.png",
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
            "name": "Jon",
            "photo": "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2Fc34b246c-f077-4dfd-8cbe-81e958a68a5c.jpeg",
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
            "name": "Batman",
            "photo": "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
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
        friends.push(data);
    },
    get() {
        return friends;
    }
}

module.exports = friendModel;