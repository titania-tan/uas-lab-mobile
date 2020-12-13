import { Location } from './location';

export class User {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
    location: Array<Location>;
}
