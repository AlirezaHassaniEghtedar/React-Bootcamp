import {AttractionWorkHours} from "./attraction-work-hours.ts";
import {AttractionTag} from "./attractions-tag.ts";

export type Attraction = {
    id : number;
    title : string;
    description : string;
    thumbnail : string;
    averageRating : number;
    reviewsCount : number;
    workHours : AttractionWorkHours[];
    tags : AttractionTag[];
    phone : string;
}