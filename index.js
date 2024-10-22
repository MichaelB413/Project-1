

const getData = (inputValue) => {
    // let inputValue = searchData();
    fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then(response => response.json())
    .then(jsonResponse => {
        document.querySelector("body").innerHTML +=
        // `<ul>
        //     <li>Word: $(jsonResponse.word)</li>
        //     <li>Part Of Speech: $(jsonResponse.meanings.partOfSpeech)</li>
        //     <li>Definition: $(jsonResponse.meanings.definition)</li>
        //     <li>Synonyms: $(jsonResponse.meanings.synonyms)</li>
        // </ul>`
        jsonResponse[0].word
        console.log(jsonResponse[0].word);
})
    // .catch(error => console.error('Error fetching data:', error));
}
const searchData = () => {
    let inputValue = document.querySelector("#searchField").value;
    return inputValue;
}


