import { randomCoordinates } from "../map/coordinates.js";

export const placecrash = (map, height, width) => {
    console.log(map, height, width);
    let i = 1;
    while (i > 0) {
        let coordinates = randomCoordinates(height, width);
        if (map[coordinates[1]][coordinates[0]] === 0) {
            map[coordinates[1]][coordinates[0]] = 5;
            i--;
        } else {
            continue;
        }
    }
    return map;
};