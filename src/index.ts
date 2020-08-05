/// <reference types="@types/googlemaps" />
import { User } from './classes/User';
import { Company } from './classes/Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const $mapContainer = <HTMLDivElement>document.getElementById('map');
$mapContainer.style.width = '100%';
$mapContainer.style.height = '100vh';

const map = new google.maps.Map($mapContainer, {
    zoom: 6,
    center: {
        lat: 0,
        lng: 0,
    },
});