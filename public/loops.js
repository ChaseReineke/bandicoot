import { movecortex } from "./game-pieces/cortex.js";
import { moveaku } from "./game-pieces/aku.js";

import * as DrawMap from "./map/draw-map.js";

export const run = (map, height, width) => {
    let newMap;
    setInterval(async function() {
        newMap = await movecortex(map);
        DrawMap.refresh(newMap);
    }, 200);

    setInterval(async function() {
        newMap = await moveaku(map, height, width);
        DrawMap.refresh(newMap);
    }, 0);
};