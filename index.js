

const getData = (inputValue) => {
    // let inputValue = searchData();
    fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then(response => response.json())
    .then(jsonResponse => {
        document.querySelector("#newList").innerHTML =
        `<ul>
            <li>Word: ${jsonResponse[0].word}</li>
            <li>Part Of Speech: ${jsonResponse[0].meanings[0].partOfSpeech}</li>
            <li>Definition: ${jsonResponse[0].meanings[0].definitions[0].definition}</li>
            <li>Synonyms: ${jsonResponse[0].meanings[0].synonyms}</li>
        </ul>`
        
        console.log(jsonResponse[0].word);
})
    // .catch(error => console.error('Error fetching data:', error));
}
const searchData = () => {
    let inputValue = document.querySelector("#searchField").value;
    return inputValue;
}


