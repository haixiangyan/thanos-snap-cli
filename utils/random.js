function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomHalfList(list) {
    const length = list.length
    let count = 0
    let chosenItems = []

    for (let i = 0; count < length / 2; i++) {
        const chosenIndex = getRandomInt(length - count)

        chosenItems.push(list[chosenIndex])

        count += 1
    }

    return chosenItems
}

module.exports = {
    getRandomInt,
    randomHalfList
}