import React, { useState, useEffect } from 'react';
import './Searchbar.scss';
import Navbar from '../Navbar/Navbar';
import { Search } from 'lucide-react';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Update searchQuery when the user types in the search bar
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Fetch posts from localStorage and filter them based on search query
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Filter posts based on the caption matching the search query
    const filtered = storedPosts.filter((post) =>
      post.caption.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery]); // Re-run the effect when searchQuery changes

  return (
    <div className="Searchbar">
      <div className="Container">
        <input
          type="text"
          className="Search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Search className="Icon" />
      </div>

      {/* Display filtered results only if there are matches */}
      {searchQuery && filteredPosts.length > 0 && (
        <div className="SearchResults">
          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>{post.caption}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display message if no results found */}
      {searchQuery && filteredPosts.length === 0 && (
        <div className="NoResults">
          <p>No results found for "{searchQuery}".</p>
        </div>
      )}

      <Navbar />
    </div>
  );
}

export default Searchbar;
