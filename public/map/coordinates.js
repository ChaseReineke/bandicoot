export const randomCoordinates = (height, width) => {
    return [
        Math.floor(Math.random() * (width - 2) + 1),
        Math.floor(Math.random() * (height - 2) + 1),
    ];
};

export const getCoordinates = (gamePiece, map) => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === gamePiece) {
                x = j;
                y = i;
            }
        }
    }
    return [x, y];
};