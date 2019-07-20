function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomHalfList(list) {
    const length = list.length
    let count = 0
    let selectedItems = []

    for (let i = 0; count < length / 2; i++) {
        const chosenIndex = getRandomInt(length - count)

        selectedItems.push(list[chosenIndex])

        count += 1
    }

    return selectedItems
}

module.exports = {
    getRandomInt,
    randomHalfList
}