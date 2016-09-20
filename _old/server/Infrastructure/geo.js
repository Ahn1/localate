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

    GetBoundingBox(elements, latSelector, longSelector) {
        let lowLat = latSelector(elements[0]);
        let hightLat = latSelector(elements[0]);
        let lowLong = longSelector(elements[0]);
        let hightLong = longSelector(elements[0]);

        elements.forEach((e, i) => {
            let lat = latSelector(e);
            let long = longSelector(e);

            if (lowLat > lat)
                lowLat = lat;
            else if (hightLat < lat)
                hightLat = lat;

            if (lowLong > long)
                lowLong = long;
            else if (hightLong < long)
                hightLong = long;
        });

        return [[hightLat, lowLong], [lowLat,hightLong]]
    }

}
