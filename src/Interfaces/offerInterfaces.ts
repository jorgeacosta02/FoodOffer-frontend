// Interface for save user in db
export interface IOfferData {
    id: string;
    title: string;
    image: string;
    description?: string;
    price: string;
    calification?: string;
}