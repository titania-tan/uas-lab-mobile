import { Location } from './location';

export class User {
    id: string;
    name: string;
    email: string;
    imageURL: string;
    location: Array<Location>;
}
