import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');

searchEl.addEventListener(
  'input',
  debounce(async ev => {
    const countries = await fetchCountries(ev.target.value);

    console.log(countries);
  }, DEBOUNCE_DELAY)
);
