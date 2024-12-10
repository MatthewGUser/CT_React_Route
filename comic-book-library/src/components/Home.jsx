import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Comic Book Library</h2>
      <nav>
        <ul>
          <li>
            <Link to="/browse-characters">Browse Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
