import React, { useState, useEffect } from 'react';
import Search from './Search';
import Scroll from './Scroll';

function SearchDetails({ details }) {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [movies, setMovies] = useState([]);
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
          <Search result={movies} />
        </Scroll>
      );
    }
    return null;
  }

  return (
    <section className="garamond">
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
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
