import { drawBlankMap } from "./blank-map.js";
import { drawInsideWalls, drawOutsideWalls } from "./walls.js";
import { drawPath } from "./path.js";
import { placewumpa } from "../game-pieces/wumpa.js";
import { placecortex } from "../game-pieces/cortex.js";
import { moveaku, placeaku } from "../game-pieces/aku.js";

export const newMap = (height, width) => {
    const blankMap = drawBlankMap(height, width);
    const outlinedMap = drawOutsideWalls(blankMap, height, width);
    const pathedMap = drawPath(outlinedMap, height, width);
    const walledMap = drawInsideWalls(pathedMap);
    const mapWithwumpa = placewumpa(walledMap, height, width);
    const mapWithcortex = placecortex(mapWithwumpa, height, width);
    placeaku(mapWithcortex, height, width);
    return mapWithcortex;
};

export const refresh = (map) => {
    $(document).ready(function() {
        let output = "";
        for (let y = 0; y < map.length; y++) {
            output += "\n<div class='row'>";
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === 0) {
                    output += "<div class='col blank'></div>";
                }
                if (map[y][x] === 1) {
                    output += "<div class='col wall'></div>";
                }
                if (map[y][x] === 2) {
                    output += "<div class='col wumpa'></div>";
                }
                if (map[y][x] === 3) {
                    output += "<div class='col cortex'></div>";
                }
                if (map[y][x] === 4) {
                    output += "<div class='col aku'></div>";
                }
                if (map[y][x] === 5) {
                    output += "<div class='col crash'></div>";
                }
            }
            output += "\n</div>";
        }
        $("#canvas").html(output);
    });
};