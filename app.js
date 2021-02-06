fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <div class="col">
                    <div class="card">
                    <img src="${country.flag}" alt="${country.name}">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p>${country.capital}</p>
                        <button onclick="displayCountryDetail('${country.name}')" class="btn btn-outline-success">Details</button>
                    </div>
                    </div>
            </div>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <div class="card">
    <img src="${country.flag}" alt="${country.name}">
        <div class="card-body">
        <h5 class="card-title">${country.name}</h5>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        </div>
    </div> `

}