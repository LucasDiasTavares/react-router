import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://swapi.co/api/vehicles/${match.params.urls}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>Item Detail</h1>
    </div>
  );
}

export default ItemDetail;
