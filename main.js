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
.then(() => {
    kanyeWestQuote.classList.add('content__title_active');
})
}


button.addEventListener('click', kanyeWestGenerate);

