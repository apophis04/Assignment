"use client";
import React from 'react'
import { useState } from 'react';
import catalogue from './Catalogue';

function Search() {
  const [search, setSearch] = useState('');
  const [filteredCatalogue, setFilteredCatalogue] = useState(catalogue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      
      <input type="text" placeholder="Search" onChange={handleChange} />
      <button onClick={() => setFilteredCatalogue(catalogue.filter((item: { title: string; }) => item.title === search))}>
        Search
      </button>
    </div>
  )
}

export default Search