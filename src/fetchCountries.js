const API_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = name => {
  return fetch(
    `${API_URL}/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error('Country not found');
      }
      return res.json();
    })
    .catch(error => {
      throw error;
    });
};

// export const fetchCountries = name => {
//   return fetch(
//     `${API_URL}/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(res => res.json());
// };
