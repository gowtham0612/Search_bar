import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <ul>
          {results.map((user) => (
            <>
              <li key={user.id}>{user.name}</li>
              <li>{user.phone}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
