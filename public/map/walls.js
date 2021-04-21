export const drawOutsideWalls = (map, height, width) => {
    for (let i = 0; i < height; i += height - 1) {
        for (let j = 0; j < width; j++) {
            map[i][j] = 1;
        }
    }
    for (let i = 1; i < height - 1; i++) {
        map[i][0] = 1;
        map[i][map[i].length - 1] = 1;
    }
    return map;
};

export const drawInsideWalls = (map) => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 0) {
                map[i][j] = 1;
            }
        }
    }
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 2) {
                map[i][j] = 0;
            }
        }
    }
    return map;
};