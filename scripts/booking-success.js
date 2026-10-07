const urlParams =
    new URLSearchParams(window.location.search);


const car =
    urlParams.get("car");

const pickup =
    urlParams.get("pickup");

const returnDate =
    urlParams.get("return");

const days =
    urlParams.get("days");

const total =
    urlParams.get("total");


// Display car

if (car) {

    document.getElementById(
        "success-car"
    ).textContent = car;

}


// Display pickup date

if (pickup) {

    document.getElementById(
        "success-pickup"
    ).textContent = pickup;

}


// Display return date

if (returnDate) {

    document.getElementById(
        "success-return"
    ).textContent = returnDate;

}


// Display number of days

if (days) {

    document.getElementById(
        "success-days"
    ).textContent =
        `${days} Days`;

}


// Display total

if (total) {

    document.getElementById(
        "success-total"
    ).textContent =
        `$${total}`;

}