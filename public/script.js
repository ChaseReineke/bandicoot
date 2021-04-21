import * as DrawMap from "./map/draw-map.js";
import * as GameLoop from "./loop.js";
$(document).ready(function() {
    const height = 10;
    const width = 15;
    const map = DrawMap.newMap(height, width);
    let output = "";
    for (let y = 0; y < height; y++) {
        output += "\n<div class='row'>";
        for (let x = 0; x < width; x++) {
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
        }
        output += "\n</div>";
    }
    $("#canvas").html(output);
    GameLoop.run(map, height, width);
});