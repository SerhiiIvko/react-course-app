import React from 'react';

export default function() {
    return (
        <div>
            <div className="container">
      <form 
    //   onSubmit={handleSubmit}
      >
        <label>
          <p>Title</p>
          <input type="text" placeholder="Movie title" />
        </label>
        <label>
          <p>Movie description</p>
          <textarea type="text" placeholder="Movie details..." />
        </label>

        <div>
            <div className="container">
            <button 
                            type="submit" 
                            className="alert-button" 
                            // onClick={<NavLink to="/movie-edit"></NavLink>}
                            >
                            Reset likes
                        </button>
                        <button 
                            type="submit" 
                            className="alert-button" 
                            // onClick={<NavLink to="/movies"></NavLink>}
                            >
                            Reset rating
                        </button>
            </div>
                        
                        <button 
                            type="submit" 
                            className="button" 
                            // onClick={<NavLink to="/movies"></NavLink>}
                            >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="button" 
                            // onClick={<NavLink to="/movies"></NavLink>}
                            >
                            Save
                        </button>
        </div>
      </form>
 
    </div>
        </div>
    )
}