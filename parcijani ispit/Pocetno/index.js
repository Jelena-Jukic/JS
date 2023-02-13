const searchFormElement = document.querySelector("#search-form");
const searchQueryElement = document.querySelector("#search-query");
const searchResultsElement = document.querySelector("#search-results");

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    searchResultsElement.innerHTML = '';
    alert("Please wait!");
    const query = searchQueryElement.value;

    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            for (let i = 0; i < json.results.length; i++) {
                const music = json.results[i];

                if (music.trackName.toLowerCase().includes(query.toLowerCase())) {
                    searchResultsElement.innerHTML += `<ul> <li>Track Name: ${music.trackName}</li> <li>Artist: ${music.artistName}</li></ul>`;
                    console.log(searchResultsElement);
                }
        
                if (searchResultsElement.innerHTML === '' && i === json.results.length - 1) {
                    searchResultsElement.innerHTML = "No results";
                }
            }
        })
});