/// <reference types="@types/googlemaps" />
import { User } from './classes/User';
import { Company } from './classes/Company';
import { CustomMap } from './classes/CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);