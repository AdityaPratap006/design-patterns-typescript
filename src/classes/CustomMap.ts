export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const $mapContainer = <HTMLDivElement>document.getElementById(divId);
        $mapContainer.style.width = '100%';
        $mapContainer.style.height = '100vh';

        this.googleMap = new google.maps.Map($mapContainer, {
            zoom: 6,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

}