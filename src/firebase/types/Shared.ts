export interface Name {
        fullName?: string;
        firstName?: string
        lastName?: string
}

/*export class Name implements IName {
    fullName?: string;

    constructor(public firstName?: string, public lastName?: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

}*/

export interface Phone {
    type?: string;
    number?: string;
}

export interface Email {
    type?: string;
    address?: string;
}

export interface Address {
    type?: string;
    street_address?: string;
    street_address2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    geoPoint?: number[];
    geoJson?: GeoJson;
}

export interface IGeometry {
    type?: string;
    coordinates?: number[];
}

export interface IGeoJson {
    type?: string;
    geometry?: IGeometry;
    properties?: any;
}

export class GeoJson implements IGeoJson {
    type = 'Feature';
    geometry?: IGeometry;

    constructor(coordinates) {
        this.geometry = {
            type: 'Point',
            coordinates
        };
    }
}