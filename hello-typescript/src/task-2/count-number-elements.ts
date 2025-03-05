export function countNumberElements(array : unknown[]) : number {
    let counter = 0;

    for(const element of array) {
        if (typeof element === "number") counter++;
    }

    return counter;
}