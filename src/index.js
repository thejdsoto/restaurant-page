import { homepage as Homepage } from './home.js';
import { restaurants as Restaurants } from './restaurants.js';
import { reservations as Reservations } from './reservations.js';
import "./style.css";

const app = document.getElementById('content');
const navButton = document.querySelectorAll('header nav button');
app.innerHTML = Homepage;


navButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch(button.dataset.value) {
            case "Homepage":
                app.innerHTML = Homepage;
                break;
            case "Restaurants":
                app.innerHTML = Restaurants;
                break;
            case "Reservations":
                app.innerHTML = Reservations;
                break;
        }
    });
});