const urlParams =
    new URLSearchParams(window.location.search);

const selectedCar =
    urlParams.get("car");


const cars = {

    bmw: {
        name: "BMW 3 Series",
        price: 80
    },

    mercedes: {
        name: "Mercedes C-Class",
        price: 100
    },

    "range-rover": {
        name: "Range Rover",
        price: 140
    },

    audi: {
        name: "Audi A6",
        price: 110
    },

    porsche: {
        name: "Porsche 911",
        price: 200
    },

    "g-wagon": {
        name: "Mercedes G-Wagon",
        price: 180
    }

};


// Get elements

const carSelect =
    document.getElementById("car");

const pickupDate =
    document.getElementById("pickup-date");

const returnDate =
    document.getElementById("return-date");

const totalPrice =
    document.getElementById("total-price");

const rentalDays =
    document.getElementById("rental-days");

const dailyPrice =
    document.getElementById("daily-price");


// Set selected car

if (selectedCar && cars[selectedCar]) {

    carSelect.value = selectedCar;

    dailyPrice.textContent =
        `Daily rate: $${cars[selectedCar].price}`;

}


// Calculate rental

function calculateRental() {

    const carName =
        carSelect.value;

    const start =
        pickupDate.value;

    const end =
        returnDate.value;


    // Make sure everything is selected

    if (!carName || !start || !end) {

        return;

    }


    // Convert dates

    const startDate =
        new Date(start);

    const endDate =
        new Date(end);


    // Calculate difference

    const difference =
        endDate - startDate;


    const days =
        difference /
        (1000 * 60 * 60 * 24);


    // Check dates

    if (days <= 0) {

        rentalDays.textContent =
            "Return date must be after pick-up date";

        totalPrice.textContent =
            "$0";

        return;

    }


    // Calculate price

    const price =
        cars[carName].price;

    const total =
        days * price;


    // Show result

    dailyPrice.textContent =
        `Daily rate: $${price}`;

    rentalDays.textContent =
        `${days} rental days`;

    totalPrice.textContent =
        `$${total}`;

}


// Listen for changes

carSelect.addEventListener(
    "change",
    calculateRental
);


pickupDate.addEventListener(
    "change",
    calculateRental
);


returnDate.addEventListener(
    "change",
    calculateRental
);
pickupDate.addEventListener(
    "change",
    function () {

        returnDate.min =
            pickupDate.value;

        calculateRental();

    }
);
const confirmButton =
    document.querySelector(".confirm-btn");


confirmButton.addEventListener(
    "click",
    function () {

        const name =
            document.getElementById("full-name").value;

        const email =
            document.getElementById("email").value;

        const car =
            carSelect.value;

        const start =
            pickupDate.value;

        const end =
            returnDate.value;


        if (
            !name ||
            !email ||
            !car ||
            !start ||
            !end
        ) {

            alert(
                "Please complete all required fields."
            );

            return;

        }


      window.location.href =
    `booking-success.html?car=${encodeURIComponent(
        cars[car].name
    )}&pickup=${start}&return=${end}&days=${days}&total=${total}`;

    }
);