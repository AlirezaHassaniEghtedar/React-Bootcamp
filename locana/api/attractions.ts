import {Attraction} from "../src/types/attraction";
import {Filters} from "../src/types/filters.ts";

export async function filterAttractions (filters : Filters) : Promise<Attraction[]> {
    const response = await fetch('https://api.codective.ir/whereabouts/attraction');
    const allAttractions = await response.json();

    return allAttractions.filter(attraction => {
        if(filters.tags.length === 0) {
            return true;
        }

        return filters.tags.every(tag => attraction.tags.find(x => x.id === tag.id))
    })
}