export class Restaurant {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public telephone: string,
        public lat: number,
        public lng: number,
        public photoUrl: string,
        public menuUrl: string,
        public isPrivate: boolean,
        public createdBy: number,
        public createdDate: Date,
        public lastUpdate: Date
    ){}
}