const calculateStylePoints = (styleNotes) => {
    const minNote = Math.min(...styleNotes);
    const maxNote = Math.max(...styleNotes);
    const finallyStyleNotes = sum(...styleNotes) - sum(minNote + maxNote);

    return finallyStyleNotes;

};

module.exports = calculateStylePoints;