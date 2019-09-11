const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const normal = distance + hillSize + (2 * (distance - kPoint));
    const big = distance + hillSize + (1.8 * (distance - kPoint));
    const mammoth = distance + hillSize + (1.2 * (distance - kPoint));

    if (hillSize === 60 && kPoint === 98) {
        return (normal);
    } else if (hillSize === 60 && kPoint === 120){
        return (big);
    } else if (hillSize === 120 && kPoint === 200) {
        return (mammoth);
    }
};

module.exports = calculateDistancePoints;