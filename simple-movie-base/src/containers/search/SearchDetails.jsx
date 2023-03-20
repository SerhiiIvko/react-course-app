import React, { useState, useEffect } from 'react';
import Search from './Search';
import Scroll from './Scroll';
import { useSelector } from 'react-redux';

function SearchDetails(props) {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const details = useSelector((state) => state.movies.movies);
  useEffect(() => {
    const filteredMovies = details.filter(
      (movie) => (
        movie
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase())
      ),
    );
    setMovies(filteredMovies);
  }, [details, searchField]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value.length === 0) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <Search movies={movies} />
        </Scroll>
      );
    }
    return null;
  }

  return (
    <section className="garamond">
      <div className="pa2">
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}
export default SearchDetails;
