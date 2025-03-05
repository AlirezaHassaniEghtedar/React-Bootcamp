export function reverseArray<T>(array : T[]): T[] {
    const result : T[] = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result[array.length - (i + 1)] = array[i];
    }

    return result;
}