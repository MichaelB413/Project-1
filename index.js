

const getData = () => {
    fetch ()
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
    return jsonData
}

const searchData = () => {
    let inputValue = document.querySelector("#searchField").v
    return inputValue
}
console.log(jsonData)