import {reverseArray} from "./task-2/reverse-array";
import {countNumberElements} from "./task-2/count-number-elements";
import {sortEntities} from "./task-2/sort-entities";
import {Entity} from "./task-2/entity";

function testReverseArray() : void {
    const items = [true , 20 , undefined , null , "Alireza" , 50]
    const result = reverseArray(items);
    console.log(result)
}

function testCountNumberElements() : void {
    const items = [true , 20 , undefined , null , "Alireza" , 50];
    const result = countNumberElements(items);
    console.log(result)
}

function testSortEntities() : void {
    const items : Entity[] = [
        {
            createdAt : "2025-03-04T00:00:00.000Z" ,
            modifiedAt : "2025-04-04T00:00:00.000Z"
        } ,
        {
            createdAt : "2024-03-04T00:00:00.000Z" ,
            modifiedAt : "2025-04-01T00:00:00.000Z"
        } ,
        {
            createdAt : "2025-03-04T00:00:00.000Z"
        }
    ]

    const sortedEntities = sortEntities(items);
    console.log(sortedEntities)
}

function main () : void {
    testReverseArray();
    testCountNumberElements();
    testSortEntities();
}

main();