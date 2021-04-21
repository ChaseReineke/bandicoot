import { randomCoordinates } from "./coordinates.js";
import { randomDirection } from "../directions.js";
import { getFreeSpace } from "./free-space.js";

export const drawPath = (map, height, width) => {
    let coordinates = randomCoordinates(height, width);
    while (getFreeSpace(map, height, width) > height * width * 0.25) {
        // UP
        if (randomDirection() === "UP" && coordinates[1] > 1) {
            map[coordinates[1] - 1][coordinates[0]] = 2;
            coordinates[1]--;
        }
        // RIGHT
        if (randomDirection() === "RIGHT" && coordinates[0] < width - 2) {
            map[coordinates[1]][coordinates[0] + 1] = 2;
            coordinates[0]++;
        }
        // DOWN
        if (randomDirection() === "DOWN" && coordinates[1] < height - 2) {
            map[coordinates[1] + 1][coordinates[0]] = 2;
            coordinates[1]++;
        }
        // LEFT
        if (randomDirection() === "LEFT" && coordinates[0] > 1) {
            map[coordinates[1]][coordinates[0] - 1] = 2;
            coordinates[0]--;
        }
    }
    return map;
};