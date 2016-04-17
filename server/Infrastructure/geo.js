import nominatim from "nominatim-geocode-async"

export default new class {
    constructor() {
        this.nom = new nominatim({
            useragent: 'MyApp',
            referer: 'https://github.com/xbgmsharp/node-nominatim2',
            timeout: 1000
        });
    }


    async ReverseSearch(lat, long) {
        var first = (await this.nom.reverse({
            lat: lat,
            lon: long,
            zoom: 14
        })).body.address;

        var second = (await this.nom.reverse({
            lat: lat,
            lon: long,
            zoom: 18
        })).body.address;

        console.log(first);

        return {
            number: second.house_number || first.house_number || null,
            city: second.city || first.city || null,
            state: second.state || first.state || null,
            city_district: second.city_district || first.city_district || null,
            postcode: second.postcode || first.postcode || null,
            road: second.road || first.road || null
        }
    }

}
