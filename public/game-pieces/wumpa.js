import { randomCoordinates } from "../map/coordinates.js";
import { placecrash } from "./crash.js";

let numberwumpa = 7;
export const placewumpa = (map, height, width) => {
    let i = numberwumpa;
    while (i > 0) {
        let coordinates = randomCoordinates(height, width);
        if (map[coordinates[1]][coordinates[0]] === 0) {
            map[coordinates[1]][coordinates[0]] = 2;
            i--;
        } else {
            continue;
        }
    }
    return map;
};

export const decrementwumpa = (map, height, width) => {
    numberwumpa--;
    if (numberwumpa === 0) {
        placecrash(map, height, width);
    } else {
        return numberwumpa;
    }
};