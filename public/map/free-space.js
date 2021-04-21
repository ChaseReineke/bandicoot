export const getFreeSpace = (map, height, width) => {
    let count = 0;
    for (let i = 1; i < height - 1; i++) {
        for (let j = 1; j < width - 1; j++) {
            if (map[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
};