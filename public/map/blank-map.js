export const drawBlankMap = (height, width) => {
    let map = [];
    for (let i = 0; i < height; i++) {
        map[i] = [];
        for (let j = 0; j < width; j++) {
            map[i][j] = 0;
        }
    }
    return map;
};