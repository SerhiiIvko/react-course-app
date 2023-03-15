import axios from 'axios';
import { BASE_URL, 
        API_KEY, 
        GET_POPULAR
        } from './Api';

async function getMovies() {
  const response = await axios.get(`${BASE_URL}${GET_POPULAR}${API_KEY}`);
  return response.data.results;
}

export default { getMovies };
// export async function getMovie() {
//   const response = await axios.get(`${BASE_URL}${GET_MOVIE_BY_ID}${API_KEY}`);
//   return response.data.results;
// }

// export async function getCredits() {
//   const response = await axios.get(`${BASE_URL}${GET_MOVIE_CREDITS}${API_KEY}`);
//   return response.data.results;
// }
