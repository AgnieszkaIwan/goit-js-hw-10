import './css/styles.css';
// import { fetchCountries } from './fetchCountries.js';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix';

// const DEBOUNCE_DELAY = 300;

// const searchEl = document.getElementById('search-box');
// const countryListEl = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// searchEl.addEventListener(
//   'input',
//   debounce(async ev => {
//     const countryName = ev.target.value.trim();

//     if (countryName === '') {
//       countryListEl.innerHTML = '';
//       countryInfo.innerHTML = '';
//       return;
//     }
//     const countries = await fetchCountries(countryName);
//     if (countries.length > 10) {
//       Notify.info('Too many matches found. Please enter a more specific name.');
//     } else {
//       countryListEl.innerHTML = countries
//         .map(
//           country =>
//             `<li><img src="${country.flags.png}"/> ${country.name.common}</li>`
//         )
//         .join('');
//     }
//     if (countries.length === 1) {
//       countryInfo.innerHTML = `
//           <p>Capital: ${countries[0].capital}</p>
//           <p>Population: ${countries[0].population}</p>
//           <p>Languages: ${Object.values(countries[0].languages).join(
//             ','
//           )}</p>
//         `;

//       try {
//       } catch (error) {
//         if (error.message === 'Country not found') {
//           Notify.failure('Oops, there is no country with that name');
//         } else {
//           Notify.failure('Something went wrong. Please try again later.');
//         }
//       }
//       if (error.message === 'Country not found') {
//         Notify.failure('Oops, there is no country with that name');
//       } else {
//         Notify.failure('Something went wrong. Please try again later.');
//       }
//     }

//     console.log(countries);
//   }, DEBOUNCE_DELAY)
// );

import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchEl.addEventListener(
  'input',
  debounce(async ev => {
    const countryName = ev.target.value.trim();

    if (countryName === '') {
      countryListEl.innerHTML = '';
      countryInfo.innerHTML = '';
      return;
    }

    try {
      const countries = await fetchCountries(countryName);
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        countryListEl.innerHTML = countries
          .map(
            country =>
              `<li><img src="${country.flags.png}"/> ${country.name.common}</li>`
          )
          .join('');
      }
      if (countries.length === 1) {
        countryInfo.innerHTML = `
            <p>Capital: ${countries[0].capital}</p>
            <p>Population: ${countries[0].population}</p>
            <p>Languages: ${Object.values(countries[0].languages).join(',')}</p>
          `;
      } else {
        countryInfo.innerHTML = '';
      }
    } catch (error) {
      if (error.message === 'Country not found') {
        Notify.failure('Oops, there is no country with that name');
      } else {
        Notify.failure('Something went wrong. Please try again later.');
      }
    }
  }, DEBOUNCE_DELAY)
);
