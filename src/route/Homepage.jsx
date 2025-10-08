import React, { useState } from 'react';
import '../App.css';
import Header from '../Header';
import CardList from '../Cardlist';
import '../Header.css'

function Homepage() {
  let[searchTerm, setSearchTerm] = useState("");
  function handlechange(event){
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <Header header="Staff List" onSearch={setSearchTerm}/>
      <input
      type="text"
      placeholder="Search staff..."
      onChange={handlechange}
      />
      <CardList 
      staffsearch={searchTerm}/>
    </div>
  );
}

export default Homepage;
