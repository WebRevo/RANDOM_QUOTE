const fetchData = () => {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = data.quote;
}

// display quote when refresh a page
fetchData();

// generate new when btn click
document.getElementById("btn-generate").addEventListener("click", fetchData);