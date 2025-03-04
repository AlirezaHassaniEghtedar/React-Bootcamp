import {reverseArray} from "./task-2/reverse-array";
import {countNumberElements} from "./task-2/count-number-elements";

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

function main () : void {
    testReverseArray();
    testCountNumberElements();
}

main();