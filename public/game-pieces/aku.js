import { getCoordinates, randomCoordinates } from "../map/coordinates.js";
import { decrementwumpa } from "./wumpa.js";
export const placeaku = (map, height, width) => {
    let i = 1;
    while (i > 0) {
        let coordinates = randomCoordinates(height, width);
        if (map[coordinates[1]][coordinates[0]] === 0) {
            map[coordinates[1]][coordinates[0]] = 4;
            i--;
        } else {
            continue;
        }
    }
    return map;
};

export const moveaku = async(map, height, width) => {
    let akuCoorindates = getCoordinates(4, map);
    document.onkeydown = (e) => {
        if (e.key === "ArrowUp") {
            if (map[akuCoorindates[1] - 1][akuCoorindates[0]] !== 1) {
                if (map[akuCoorindates[1] - 1][akuCoorindates[0]] === 5) {
                    alert("Hey aku!");
                    window.location.reload();
                }
                if (map[akuCoorindates[1] - 1][akuCoorindates[0]] === 2) {
                    decrementwumpa(map, height, width);
                }
                if (map[akuCoorindates[1] - 1][akuCoorindates[0]] === 3) {
                    alert("Game Over!");
                    window.location.reload();
                }
                map[akuCoorindates[1] - 1][akuCoorindates[0]] = 4;
                map[akuCoorindates[1]][akuCoorindates[0]] = 0;
            }
        }

        if (e.key === "ArrowDown") {
            if (map[akuCoorindates[1] + 1][akuCoorindates[0]] !== 1) {
                if (map[akuCoorindates[1] + 1][akuCoorindates[0]] === 5) {
                    alert("Hey aku!");
                    window.location.reload();
                }
                if (map[akuCoorindates[1] + 1][akuCoorindates[0]] === 2) {
                    decrementwumpa(map, height, width);
                }
                if (map[akuCoorindates[1] + 1][akuCoorindates[0]] === 3) {
                    alert("Game Over!");
                    window.location.reload();
                }
                map[akuCoorindates[1] + 1][akuCoorindates[0]] = 4;
                map[akuCoorindates[1]][akuCoorindates[0]] = 0;
            }
        }
        if (e.key === "ArrowLeft") {
            if (map[akuCoorindates[1]][akuCoorindates[0] - 1] !== 1) {
                if (map[akuCoorindates[1]][akuCoorindates[0] - 1] === 5) {
                    alert("Hey aku!");
                    window.location.reload();
                }
                if (map[akuCoorindates[1]][akuCoorindates[0] - 1] === 2) {
                    decrementwumpa(map, height, width);
                }
                if (map[akuCoorindates[1]][akuCoorindates[0] - 1] === 3) {
                    alert("Game Over!");
                    window.location.reload();
                }
                map[akuCoorindates[1]][akuCoorindates[0] - 1] = 4;
                map[akuCoorindates[1]][akuCoorindates[0]] = 0;
            }
        }
        if (e.key === "ArrowRight") {
            if (map[akuCoorindates[1]][akuCoorindates[0] + 1] !== 1) {
                if (map[akuCoorindates[1]][akuCoorindates[0] + 1] === 5) {
                    alert("Hey aku!");
                    window.location.reload();
                }
                if (map[akuCoorindates[1]][akuCoorindates[0] + 1] === 2) {
                    decrementwumpa(map, height, width);
                }
                if (map[akuCoorindates[1]][akuCoorindates[0] + 1] === 3) {
                    alert("Game Over!");
                    window.location.reload();
                }
                map[akuCoorindates[1]][akuCoorindates[0] + 1] = 4;
                map[akuCoorindates[1]][akuCoorindates[0]] = 0;
            }
        }
    };
    return map;
};