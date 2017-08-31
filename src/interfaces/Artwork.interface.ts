import { UserDetail } from 'src/interfaces/User.interface';
import { Image } from 'src/interfaces/Image.interface';

interface Counts {
    like: number;
    view: number;
}

export interface Artwork {
    id: string;
    title: string;
    image: Image;
    user: UserDetail;
    hashTags: string[];
    description: string;
    counts: Counts;
    licenseCode: string;
    myLike: boolean;
    createdAt: string;
    updatedAt: string;
}
