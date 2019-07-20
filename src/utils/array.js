function deleteItem(array, index) {
    if (array.length === 0) {
        return
    }
    // Swap with last element
    let temp = array[index]
    array[index] = array[array.length - 1]
    array[array.length - 1] = temp

    // Remove last element
    array.length = array.length - 1
}