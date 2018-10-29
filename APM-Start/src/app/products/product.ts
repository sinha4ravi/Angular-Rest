export interface IProduct{
    productId: number;
    productName: String;
    productCode: String;
    releaseDate: String;
    price: number;
    description: String;
    starRating: number;
    imageUrl: String;
}

export class Product implements IProduct{

    constructor(
        public productId: number,
        public productName: String,
        public productCode: String,
        public releaseDate: String,
        public price: number,
        public description: String,
        public starRating: number,
        public imageUrl: String
    ){    }

    calculateDsicount(percent: number):number
    {
        return this.price-(this.price*percent/100)
    }
}