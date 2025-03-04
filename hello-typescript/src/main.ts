import {reverseArray} from "./task-2/reverse-array";

function testReverseArray() : void {
    const items = [true , 20 , undefined , null , "Alireza" , 50]
    const result = reverseArray(items);
    console.log(result)
}

function main () : void {
    testReverseArray();
}

main();