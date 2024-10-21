

const getData = () => {
    fetch (`https://dictionaryapi.dev/=${inputValue}`)
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
    return jsonData
}

const searchData = () => {
    let inputValue = document.querySelector("#searchField").v
    return inputValue
}
console.log(jsonData)