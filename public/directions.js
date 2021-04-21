export const randomDirection = () => {
    const randomNumber = Math.floor(Math.random() * 4 + 1);
    if (randomNumber === 1) {
        return "UP";
    }
    if (randomNumber === 2) {
        return "RIGHT";
    }
    if (randomNumber === 3) {
        return "DOWN";
    }
    if (randomNumber === 4) {
        return "LEFT";
    }
};