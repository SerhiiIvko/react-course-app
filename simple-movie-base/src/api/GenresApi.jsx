import axios from 'axios';
import { BASE_URL, 
        API_KEY,
        GET_MOVIES_GENRES 
        } from './Api';

async function getGenresList() {
  const response = await axios.get(`${BASE_URL}${GET_MOVIES_GENRES}${API_KEY}`);
  return response.data.results;
}

export default { getGenresList };