
// Instruction to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent: () => string;
};

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const $mapContainer = <HTMLDivElement>document.getElementById(divId);
        $mapContainer.style.width = '100%';
        $mapContainer.style.height = '100vh';

        this.googleMap = new google.maps.Map($mapContainer, {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

}