import { getCoordinates, randomCoordinates } from "../map/coordinates.js";
import { randomDirection } from "../directions.js";

export const placecortex = (map, height, width) => {
    let i = 1;
    while (i > 0) {
        let coordinates = randomCoordinates(height, width);
        if (map[coordinates[1]][coordinates[0]] === 0) {
            map[coordinates[1]][coordinates[0]] = 3;
            i--;
        } else {
            continue;
        }
    }
    return map;
};

export const movecortex = async(map) => {
    let cortexCoorindates = getCoordinates(3, map);
    let direction = randomDirection();
    if (direction === "UP") {
        if (
            map[cortexCoorindates[1] - 1][cortexCoorindates[0]] !== 1 &&
            map[cortexCoorindates[1] - 1][cortexCoorindates[0]] !== 2 &&
            map[cortexCoorindates[1] - 1][cortexCoorindates[0]] !== 5
        ) {
            if (map[cortexCoorindates[1] - 1][cortexCoorindates[0]] === 4) {
                alert("Game Over!");
                window.location.reload();
            }
            map[cortexCoorindates[1] - 1][cortexCoorindates[0]] = 3;
            map[cortexCoorindates[1]][cortexCoorindates[0]] = 0;
        }
    }
    if (direction === "DOWN") {
        if (
            map[cortexCoorindates[1] + 1][cortexCoorindates[0]] !== 1 &&
            map[cortexCoorindates[1] + 1][cortexCoorindates[0]] !== 2 &&
            map[cortexCoorindates[1] + 1][cortexCoorindates[0]] !== 5
        ) {
            if (map[cortexCoorindates[1] + 1][cortexCoorindates[0]] === 4) {
                alert("Game Over!");
                window.location.reload();
            }
            map[cortexCoorindates[1] + 1][cortexCoorindates[0]] = 3;
            map[cortexCoorindates[1]][cortexCoorindates[0]] = 0;
        }
    }
    if (direction === "LEFT") {
        if (
            map[cortexCoorindates[1]][cortexCoorindates[0] - 1] !== 1 &&
            map[cortexCoorindates[1]][cortexCoorindates[0] - 1] !== 2 &&
            map[cortexCoorindates[1]][cortexCoorindates[0] - 1] !== 5
        ) {
            if (map[cortexCoorindates[1]][cortexCoorindates[0] - 1] === 4) {
                alert("Game Over!");
                window.location.reload();
            }
            map[cortexCoorindates[1]][cortexCoorindates[0] - 1] = 3;
            map[cortexCoorindates[1]][cortexCoorindates[0]] = 0;
        }
    }
    if (direction === "RIGHT") {
        if (
            map[cortexCoorindates[1]][cortexCoorindates[0] + 1] !== 1 &&
            map[cortexCoorindates[1]][cortexCoorindates[0] + 1] !== 2 &&
            map[cortexCoorindates[1]][cortexCoorindates[0] + 1] !== 5
        ) {
            if (map[cortexCoorindates[1]][cortexCoorindates[0] + 1] === 4) {
                alert("Game Over!");
                window.location.reload();
            }
            map[cortexCoorindates[1]][cortexCoorindates[0] + 1] = 3;
            map[cortexCoorindates[1]][cortexCoorindates[0]] = 0;
        }
    }
    return map;
};