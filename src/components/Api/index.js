const API_URL = 'https://openlibrary.org/search.json';

export const fetchMovies = async (query) => {
  const response = await fetch(`${API_URL}?q=${query}`);
  const data = await response.json();
  return data.docs;
};

export const fetchDogImage = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message;
};
