const button = document.querySelector('.button');
const kanyeWestQuote = document.querySelector('.content__title');


function kanyeWestGenerate() {
    fetch('https://api.kanye.rest')
.then((res) => {
    return res.json();
})
.then((data) => {
    kanyeWestQuote.textContent = data.quote;
})
}


button.addEventListener('click', kanyeWestGenerate);

