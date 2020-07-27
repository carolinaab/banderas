const countries = window.COUNTRIES; //Extraer data 

const formulario = document.getElementById("search")
const results = document.getElementById("resultado")
let search_term = '';
// let countries;


// const fetchInstitutos = async () => {
//     countries = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag;capital;currencies;languages')
//         .then(res => res.json())
// }

const showInstitutos = async () => {
    results.innerHTML = '';

    // await fetchInstitutos()

    const container = document.createElement('div')
    container.classList.add('container')

    countries
        .filter(country =>
            country.name.toLowerCase().includes(search_term.toLowerCase())
        )
        .forEach(country => {
            const flipCard = document.createElement('div')
            flipCard.classList.add('flip-card')

            const flipCardIner = document.createElement('div')
            flipCardIner.classList.add('flip-card-inner')

            const cardFront = document.createElement('div')
            cardFront.classList.add('flip-card-front')

            const image = document.createElement('img')
            image.src = country.flag
            image.classList.add('img')

            const flipCardBack = document.createElement('div')
            flipCardBack.classList.add('flip-card-back')

            const name = document.createElement('h1')
            name.innerText = country.name

            const capital = document.createElement('h3')
            capital.innerText = `Capital: ${country.capital}`

            // country.regionalBlocs.map(valor => valor.name.toString())
           
            const population = document.createElement('p')
            population.innerText = `Población: ${numberWithCommas(country.population)}`

            const currencies = document.createElement('p')
            currencies.innerText = `Moneda: ${country.currencies.map(moneda => moneda.name)}`

            const languages = document.createElement('p')
            languages.innerText = `Idioma: ${country.languages.map(idioma => idioma.name)}`

            const hr = document.createElement("hr")
            hr.classList.add('hr')

            cardFront.appendChild(image)
            flipCardBack.appendChild(name)
            flipCardBack.appendChild(hr)
            flipCardBack.appendChild(capital)
            flipCardBack.appendChild(population)
            flipCardBack.appendChild(currencies)
            flipCardBack.appendChild(languages)
            flipCardIner.appendChild(cardFront)
            flipCardIner.appendChild(flipCardBack)
            flipCard.appendChild(flipCardIner)

            container.appendChild(flipCard)

        });

    results.appendChild(container);



};




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
showInstitutos()

formulario.addEventListener('input', e => {
    search_term = e.target.value;
    showInstitutos();
});
