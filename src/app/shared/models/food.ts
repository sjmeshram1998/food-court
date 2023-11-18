export class Foods {
    id!: number;
    price!: number;
    name!: string;
    favourite: boolean=false;
    star: number=0;
    tags?:string[];
    imageUrl!: string;
    cooktime!: string;
    origins!: string[];
}