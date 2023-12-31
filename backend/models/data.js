const bcrypt = require('bcryptjs')

const data = {
    users:[
        {
            username: 'Bob',
            email: 'bob@mail.com',
            password: bcrypt.hashSync('bob')
        },
        {
            username: 'Joe',
            email: 'joe@mail.com',
            password: bcrypt.hashSync('joe')
        }
    ],
    products: [
        {
            // _id: '1',
            name: 'Dog',
            slug: 'dog',
            image: '/images/dog.jpg',
            price: 150,
            countInStock: 5,
            rating: 4.5,
            description: '4-yr Old Dog, strong and loving',
            numReviews: 10
        },
        {
            // _id: '2',
            name: 'Kitten',
            slug: 'kitten',
            image: '/images/kitten.jpg',
            price: 80,
            countInStock: 10,
            rating: 5,
            description: '4-month Old Kitten, soft and fluffy',
            numReviews: 10
        },
        {
            // _id: '3',
            name: 'Bird',
            slug: 'bird',
            image: '/images/bird.jpg',
            price: 200,
            countInStock: 3,
            rating: 4,
            description: '2-yr Old Parakeet, loves to talk',
            numReviews: 10
        },
        {
            // _id: '4',
            name: 'Guinea Pig',
            slug: 'guinea-pig',
            image: '/images/guineapig.jpg',
            price: 100,
            countInStock: 0,
            rating: 3.5,
            description: '2-yr Old Guinea Pig, very sleepy',
            numReviews: 5
        },
        {
            // _id: '5',
            name: 'Chicken',
            slug: 'chicken',
            image: '/images/chicken.jpg',
            price: 300,
            countInStock: 5,
            rating: 4.5,
            description: '1-yr Old Chicken, regularly lays eggs',
            numReviews: 10
        }
    ]
}

module.exports = data