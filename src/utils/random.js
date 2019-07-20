function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomHalfList(list) {
    const length = list.length
    let count = 0
    let selectedItems = []

    for (let i = 0; count < length / 2; i++) {
        // Select item
        const selectedIndex = getRandomInt(length - count)
        selectedItems.push(list[selectedIndex])
        count += 1

        // Remove selected item
        list.splice(selectedIndex, 1)
    }

    return selectedItems
}

module.exports = {
    getRandomInt,
    randomHalfList
}