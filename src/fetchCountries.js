const API_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = name => {
  return fetch(
    `${API_URL}/name/${name}?fields=name,capital,population,flags,languages`
  ).then(res => res.json());
};
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       })
//   );
// };
