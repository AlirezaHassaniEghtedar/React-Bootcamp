import {Entity} from "./entity"

export function sortEntities(array : Entity[]) : Entity[] {
    const result : Entity[] = [ ...array ];

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            const firstDate = new Date(result[j].modifiedAt ?? result[j].createdAt[j]);
            const secondDate = new Date(result[j + 1].modifiedAt ?? result[j + 1].createdAt[j + 1]);

            if (firstDate < secondDate) {
                const temp = result[j];
                result[j] = result[j+1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}