import React, { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchTerm && onSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <label htmlFor="Search Country here">Country : </label>
      <input
        autoFocus
        type="text"
        autoComplete="off"
        placeholder="Search here..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
