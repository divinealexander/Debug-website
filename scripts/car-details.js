const cars = {
    bmw: {
        name: "BMW 3 Series",
        type: "PREMIUM SEDAN",
        image: "media/b,w.jpg",
        rating: "4.8",
        reviews: "120 Reviews",
        price: "$80",
        description: "Experience comfort, performance and style with the BMW 3 Series. This vehicle is ideal for business trips, city driving and weekend travel.",
        seats: "5 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "2 Bags"
    },

    mercedes: {
        name: "Mercedes C-Class",
        type: "LUXURY SEDAN",
        image: "media/mercedes.jpg",
        rating: "4.9",
        reviews: "145 Reviews",
        price: "$100",
        description: "Enjoy a smooth and luxurious driving experience with the Mercedes C-Class.",
        seats: "5 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "2 Bags"
    },

    "range-rover": {
        name: "Range Rover",
        type: "LUXURY SUV",
        image: "media/rover.jpg",
        rating: "4.9",
        reviews: "98 Reviews",
        price: "$140",
        description: "Travel in confidence and comfort with the Range Rover.",
        seats: "5 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "3 Bags"
    },

    audi: {
        name: "Audi A6",
        type: "LUXURY SEDAN",
        image: "media/lux3.jpg",
        rating: "4.7",
        reviews: "89 Reviews",
        price: "$110",
        description: "The Audi A6 combines elegant design, comfort and modern performance.",
        seats: "5 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "2 Bags"
    },

    porsche: {
        name: "Porsche 911",
        type: "SPORTS CAR",
        image: "media/lux4.jpg",
        rating: "5.0",
        reviews: "72 Reviews",
        price: "$200",
        description: "Experience thrilling performance with the Porsche 911.",
        seats: "2 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "1 Bag"
    },

    "g-wagon": {
        name: "Mercedes G-Wagon",
        type: "LUXURY SUV",
        image: "media/lux1.jpg",
        rating: "4.9",
        reviews: "110 Reviews",
        price: "$180",
        description: "The Mercedes G-Wagon combines bold design, luxury and power.",
        seats: "5 Seats",
        fuel: "Petrol",
        transmission: "Automatic",
        bags: "3 Bags"
    }
};


// Get the car name from the URL

const urlParams = new URLSearchParams(
    window.location.search
);

const selectedCar = urlParams.get("car");


// Check if the car exists

if (selectedCar && cars[selectedCar]) {

    const car = cars[selectedCar];

    // Get elements from the page

    const image = document.querySelector(
        ".details-image img"
    );

    const type = document.querySelector(
        ".details-content .section-subtitle"
    );

    const title = document.querySelector(
        ".details-content h1"
    );

    const rating = document.querySelector(
        ".rating strong"
    );

    const reviews = document.querySelector(
        ".rating span"
    );

    const description = document.querySelector(
        ".description"
    );

    const specs = document.querySelectorAll(
        ".spec span"
    );

    const price = document.querySelector(
        ".details-price strong"
    );

    const bookButton = document.querySelector(
        ".book-btn"
    );


    // Change the information

    if (image) {
        image.src = car.image;
        image.alt = car.name;
    }

    if (type) {
        type.textContent = car.type;
    }

    if (title) {
        title.textContent = car.name;
    }

    if (rating) {
        rating.textContent = car.rating;
    }

    if (reviews) {
        reviews.textContent = car.reviews;
    }

    if (description) {
        description.textContent = car.description;
    }


    // Change specifications

    if (specs.length >= 4) {

        specs[0].textContent = car.seats;
        specs[1].textContent = car.fuel;
        specs[2].textContent = car.transmission;
        specs[3].textContent = car.bags;

    }


    if (price) {
        price.textContent = car.price;
    }


    // Send the selected car to booking page

    if (bookButton) {

        bookButton.href =
            `booking.html?car=${selectedCar}`;

    }

}
